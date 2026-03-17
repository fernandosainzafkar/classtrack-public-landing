'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'

import type { MotionValue } from 'motion/react'
import { motion, useScroll, useTransform } from 'motion/react'

import LogoVector from '@/assets/svg/logo-vector'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

import { MotionPreset } from '@/components/ui/motion-preset'
import { useIsMobile } from '@/hooks/use-mobile'

type FeatureItem = {
  id: string
  icon: ReactNode
  title: string
  description: string
  position: 'left' | 'right'
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function FeatureCard({ feature, isMobile = false }: { feature: FeatureItem; isMobile?: boolean }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ['start 0.85', 'start 0.4'] : ['start end', 'end start']
  })

  const y = useParallax(scrollYProgress, isMobile ? 40 : 100)

  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.7, 1] : [0, 0.4, 0.5, 0.6, 1],
    isMobile ? [0, 1, 1, 0] : [0, 1, 1, 1, 0]
  )

  return (
    <section
      ref={ref}
      id={feature.id}
      className={
        isMobile ? 'flex min-h-[30vh] justify-center px-4 pb-8' : 'flex min-h-screen items-center justify-center pt-20'
      }
    >
      <motion.div
        className={
          isMobile
            ? 'w-full max-w-sm space-y-2'
            : `w-full max-w-xs space-y-2 lg:max-xl:max-w-75 ${feature.position === 'left' ? 'mr-auto ml-8 lg:ml-0' : 'mr-8 ml-auto md:mr-auto md:ml-8 lg:mr-0 lg:ml-auto'}`
        }
        style={{ opacity, y }}
      >
        <div className='flex items-center gap-4'>
          <div
            className={cn(
              'from-primary/10 to-primary/20 flex shrink-0 items-center justify-center rounded-lg border bg-linear-to-b',
              isMobile ? 'size-12' : 'size-15'
            )}
          >
            {feature.icon}
          </div>
          <h3 className='text-2xl font-semibold'>{feature.title}</h3>
        </div>
        <p className='text-muted-foreground'>{feature.description}</p>
      </motion.div>
    </section>
  )
}

const Features = ({ features }: { features: FeatureItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  const isMobileScreen = useIsMobile()

  return (
    <section id='features' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <Badge className='border-primary text-primary px-3 py-1 text-sm uppercase [&>svg]:size-6' variant='outline'>
              {/* <LogoVector className='animation-duration-[2s] size-6 animate-spin' /> */}
              FUNCIONALIDADES PERRO
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
            tu academia.
          </MotionPreset>
        </div>

        <MotionPreset fade slide={{ direction: 'down', offset: 50 }} delay={0.6} transition={{ duration: 0.7 }}>
          <div ref={containerRef} className='relative'>
            {/* Sticky Laptop */}
            <div className='pointer-events-none sticky top-4 z-10 flex w-full justify-center px-4 md:top-0 md:h-screen md:items-center md:justify-end lg:justify-center'>
              <div className='relative flex w-full max-w-md flex-col items-center md:mr-8 lg:mr-0 lg:max-w-[480px] xl:max-w-lg'>
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
                      src='/images/perplexity.webp'
                      alt='App Content'
                      className='h-auto w-full dark:hidden'
                      style={{ originY: 0, y: imageY }}
                    />
                    <motion.img
                      src='/images/perplexity-dark.webp'
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
            <div className='relative max-md:mt-[55vh] md:-mt-[100vh]'>
              {features.map(feature => (
                <FeatureCard key={feature.id} feature={feature} isMobile={isMobileScreen} />
              ))}
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default Features
