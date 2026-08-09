'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'

import type { MotionValue } from 'motion/react'
import { motion, useScroll, useTransform } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

import { MotionPreset } from '@/components/ui/motion-preset'
import { useIsMobile } from '@/hooks/use-mobile'

type FeatureItem = {
  id: string
  icon?: ReactNode
  title: string
  description: string
  position: 'left' | 'right'
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function FeatureCard({
  feature,
  isLast = false,
  isMobile = false
}: {
  feature: FeatureItem
  isLast?: boolean
  isMobile?: boolean
}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ['start 0.72', 'start 0.28'] : ['start end', 'end start']
  })

  const y = useParallax(scrollYProgress, isMobile ? 32 : 100)

  const opacity = useTransform(
    scrollYProgress,
    isMobile
      ? [0, 0.2, 0.55, 0.76, 1]
      : isLast
        ? [0, 0.25, 0.55, 0.85, 1]
        : [0, 0.4, 0.5, 0.6, 1],
    isMobile ? [0, 1, 1, 0, 0] : isLast ? [0, 1, 1, 1, 0] : [0, 1, 1, 1, 0]
  )

  return (
    <section
      ref={ref}
      id={feature.id}
      className={cn(
        'flex items-center justify-center',
        isMobile
          ? 'min-h-[28vh] justify-center px-4 pb-10'
          : isLast
            ? 'min-h-[60vh] pt-4 pb-0'
            : 'min-h-[60vh] pt-8'
      )}
    >
      <motion.div
        className={
          isMobile
            ? 'w-full max-w-sm space-y-2'
            : `w-full max-w-xs space-y-2 lg:max-xl:max-w-75 ${feature.position === 'left' ? 'mr-auto ml-8 lg:ml-0' : 'mr-8 ml-auto md:mr-auto md:ml-8 lg:mr-0 lg:ml-auto'}`
        }
        style={{ opacity, y }}
      >
        <div className='space-y-2'>
          <h3 className='text-2xl font-semibold'>{feature.title}</h3>
          <p className='text-muted-foreground'>{feature.description}</p>
        </div>
      </motion.div>
    </section>
  )
}

const Features = ({ features }: { features: FeatureItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobileScreen = useIsMobile()
  const { scrollYProgress: sectionProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const imageY = isMobileScreen
    ? useTransform(
        sectionProgress,
        [0, 0.18, 0.4, 0.58, 0.76, 1],
        ['0%', '-0%', '-25%', '-34%', '-43%', '-76%']
      )
    : useTransform(
        sectionProgress,
        [0, 0.18, 0.32, 0.48, 0.64, 1],
        ['0%', '-10%', '-28%', '-40%', '-50%', '-76%']
      )

  return (
    <section id='features' className='pt-8 pb-0 sm:pt-16 sm:pb-0 lg:pt-24 lg:pb-0'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <Badge className='border-primary text-primary px-3 py-1 text-sm uppercase [&>svg]:size-6' variant='outline'>
              FUNCIONALIDADES
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.7 }}
          >
            Todo lo que necesitas para crecer sin fricciones
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.7 }}
          >
            Con tecnología potente y un diseño intuitivo, elimina los mayores dolores de cabeza en la gestión diaria de
            tu centro.
          </MotionPreset>
        </div>

        <MotionPreset fade slide={{ direction: 'down', offset: 50 }} delay={0.6} transition={{ duration: 0.7 }}>
          <div ref={containerRef} className='relative pb-0 sm:pb-0 lg:pb-0'>
            {/* Sticky Laptop */}
            <div className='pointer-events-none sticky top-4 z-10 flex w-full justify-center px-4 max-md:top-[12vh] max-md:h-[42vh] max-md:items-start md:top-0 md:h-screen md:items-center md:justify-end lg:justify-center'>
              <div className='relative flex w-[85%] max-w-md flex-col items-center sm:w-[90%] md:mr-8 md:w-full lg:mr-0 lg:max-w-[480px] xl:max-w-lg'>
                {/* Laptop Top / Screen Border */}
                <div className='relative w-full rounded-t-xl border-4 border-b-0 border-zinc-800 bg-zinc-900 p-1 sm:rounded-t-3xl sm:border-6 sm:p-1.5'>
                  {/* Camera */}
                  <div className='absolute top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zinc-700 sm:top-1 sm:h-1 sm:w-1'></div>
                  {/* Screen Content */}
                  <div
                    className='bg-background border-border relative w-full overflow-hidden rounded-sm border shadow-inner'
                    style={{ aspectRatio: '14/10' }}
                  >
                    <motion.img
                      src='/images/classtrack_flow.png'
                      alt='App Content'
                      className='h-auto w-full dark:hidden'
                      style={{ originY: 0, y: imageY }}
                    />
                    <motion.img
                      src='/images/classtrack_flow.png'
                      alt='App Content'
                      className='hidden h-auto w-full dark:inline-block'
                      style={{ originY: 0, y: imageY }}
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className='relative flex h-2 w-[112%] flex-col items-center justify-start rounded-b-lg border-t-2 border-zinc-600 bg-zinc-800 sm:h-2.5 sm:w-[108%] sm:rounded-b-xl'>
                  {/* Trackpad indentation equivalent */}
                  <div className='h-0.5 w-1/6 rounded-b-sm bg-zinc-700 sm:h-1'></div>
                </div>
              </div>
            </div>

            {/* Mobile Feature Cards */}
            <div className='relative max-md:mt-[28vh] md:-mt-[80vh]'>
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isLast={index === features.length - 1}
                  isMobile={isMobileScreen}
                />
              ))}
              <div
                aria-hidden='true'
                className='pointer-events-none max-md:h-0 md:h-[20vh]'
              />
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default Features
