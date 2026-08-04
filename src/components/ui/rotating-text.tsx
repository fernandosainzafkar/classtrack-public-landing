'use client'

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

import styles from './rotating-text.module.css'

type RotatingTextRef = {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

type StaggerFrom = 'first' | 'last' | 'center' | 'random' | number
type SplitBy = 'characters' | 'words' | 'lines' | string
type AnimationState = Record<string, string | number>
type TransitionConfig = Record<string, unknown>

type RotatingTextProps = {
  texts: string[]
  rotationInterval?: number
  initial?: AnimationState
  animate?: AnimationState
  exit?: AnimationState
  animatePresenceMode?: 'sync' | 'wait' | 'popLayout'
  animatePresenceInitial?: boolean
  staggerDuration?: number
  staggerFrom?: StaggerFrom
  transition?: TransitionConfig
  loop?: boolean
  auto?: boolean
  splitBy?: SplitBy
  onNext?: (index: number) => void
  className?: string
  mainClassName?: string
  splitLevelClassName?: string
  elementLevelClassName?: string
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: 'spring', damping: 25, stiffness: 300 },
      initial = { y: '100%', opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: '-120%', opacity: 0 },
      animatePresenceMode = 'wait',
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = 'first',
      loop = true,
      auto = true,
      splitBy = 'characters',
      onNext,
      className,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    const splitIntoCharacters = useCallback((text: string) => {
      if (typeof Intl !== 'undefined' && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter('es', { granularity: 'grapheme' })
        return Array.from(segmenter.segment(text), segment => segment.segment)
      }

      return Array.from(text)
    }, [])

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex] ?? ''

      if (splitBy === 'characters') {
        const words = currentText.split(' ')
        return words.map((word, index) => ({
          characters: splitIntoCharacters(word),
          needsSpace: index !== words.length - 1
        }))
      }

      if (splitBy === 'words') {
        return currentText.split(' ').map((word, index, array) => ({
          characters: [word],
          needsSpace: index !== array.length - 1
        }))
      }

      if (splitBy === 'lines') {
        return currentText.split('\n').map((line, index, array) => ({
          characters: [line],
          needsSpace: index !== array.length - 1
        }))
      }

      return currentText.split(splitBy).map((part, index, array) => ({
        characters: [part],
        needsSpace: index !== array.length - 1
      }))
    }, [currentTextIndex, splitBy, splitIntoCharacters, texts])

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex)
        onNext?.(newIndex)
      },
      [onNext]
    )

    const next = useCallback(() => {
      const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1

      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex)
      }
    }, [currentTextIndex, handleIndexChange, loop, texts.length])

    const previous = useCallback(() => {
      const previousIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1

      if (previousIndex !== currentTextIndex) {
        handleIndexChange(previousIndex)
      }
    }, [currentTextIndex, handleIndexChange, loop, texts.length])

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1))

        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex)
        }
      },
      [currentTextIndex, handleIndexChange, texts.length]
    )

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0)
      }
    }, [currentTextIndex, handleIndexChange])

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset
      }),
      [jumpTo, next, previous, reset]
    )

    useEffect(() => {
      if (!auto || texts.length <= 1) {
        return
      }

      const intervalId = window.setInterval(next, rotationInterval)

      return () => {
        window.clearInterval(intervalId)
      }
    }, [auto, next, rotationInterval, texts.length])

    const getStaggerDelay = (index: number, totalChars: number) => {
      if (staggerFrom === 'first') {
        return index * staggerDuration
      }

      if (staggerFrom === 'last') {
        return (totalChars - 1 - index) * staggerDuration
      }

      if (staggerFrom === 'center') {
        const center = Math.floor(totalChars / 2)
        return Math.abs(center - index) * staggerDuration
      }

      if (staggerFrom === 'random') {
        const randomIndex = Math.floor(Math.random() * totalChars)
        return Math.abs(randomIndex - index) * staggerDuration
      }

      return Math.abs(staggerFrom - index) * staggerDuration
    }

    return (
      <motion.span
        className={cn(styles.textRotate, className, mainClassName)}
        layout
        transition={transition}
        {...rest}
      >
        <span className={styles.srOnly}>{texts[currentTextIndex]}</span>

        <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
          <motion.span
            key={currentTextIndex}
            className={cn(splitBy === 'lines' ? styles.lines : styles.textRotate)}
            layout
            aria-hidden='true'
          >
            {elements.map((word, wordIndex, array) => {
              const previousCharsCount = array
                .slice(0, wordIndex)
                .reduce((sum, item) => sum + item.characters.length, 0)
              const totalChars = array.reduce((sum, item) => sum + item.characters.length, 0)

              return (
                <span key={`${wordIndex}-${word.characters.join('')}`} className={cn(styles.word, splitLevelClassName)}>
                  {word.characters.map((character, characterIndex) => (
                    <motion.span
                      key={`${characterIndex}-${character}`}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(previousCharsCount + characterIndex, totalChars)
                      }}
                      className={cn(styles.element, elementLevelClassName)}
                    >
                      {character}
                    </motion.span>
                  ))}
                  {word.needsSpace && <span className={styles.space}> </span>}
                </span>
              )
            })}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    )
  }
)

RotatingText.displayName = 'RotatingText'

export default RotatingText
export type { RotatingTextProps, RotatingTextRef }
