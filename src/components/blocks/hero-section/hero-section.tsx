'use client'

import Link from 'next/link'

import { ChevronUpIcon } from 'lucide-react'

import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'
import RotatingText from '@/components/ui/rotating-text'

import HeroBadge from '@/components/blocks/hero-section/hero-badge'

import InfoIcon from '@/assets/svg/info-icon'
import StarBadge from '@/assets/svg/star-badge'

const HeroSection = () => {


  return (
    <section className='relative -mt-20 overflow-hidden bg-[url(/images/bg-pattern.webp)] pt-28 sm:pt-36 lg:pt-44'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col items-center gap-4 text-center'>
          <HeroBadge />
          <MotionPreset
            component='h1'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl'
          >
            <span className='flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5'>
              <span>Software para</span>
              <RotatingText
                texts={['academias', 'gimnasios', 'psicólogos', 'coaches']}
                mainClassName='mt-4 bg-transparent !text-primary overflow-visible px-1 pt-1.5 pb-3 sm:pt-2 sm:pb-3.5'
                staggerFrom='last'
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-105%' }}
                staggerDuration={0.03}
                splitLevelClassName='overflow-hidden pb-2 sm:pb-2.5'
                elementLevelClassName='leading-[1.1]'
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
              <span>y mucho más</span>
              <span className='text-primary'>.</span>
            </span>
          </MotionPreset>
          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='text-muted-foreground max-w-3xl text-lg sm:text-xl'
          >
            Crea tu web, automatiza matrículas online y centraliza alumnos, pagos y comunicación desde una única plataforma pensada para captar más clientes y reducir gestión manual.
          </MotionPreset>
          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex flex-wrap items-center justify-center gap-4'
          >
            <Link
              href='https://admin.classtrack.academy/signup'
              className='bg-primary text-primary-foreground inline-flex min-w-60 items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-opacity hover:opacity-90'
            >
              Empieza tu prueba de 14 días gratis
            </Link>
            <Link
              href='https://admin.classtrack.academy/signup'
              className='border-border bg-background text-foreground inline-flex min-w-60 items-center justify-center gap-3 rounded-lg border px-6 py-3 text-base font-medium transition-colors hover:bg-accent'
            >
              <svg aria-hidden='true' viewBox='0 0 24 24' className='size-5 shrink-0'>
                <path
                  d='M21.805 10.023h-9.78v3.955h5.605c-.242 1.272-.967 2.35-2.06 3.073v2.545h3.333c1.95-1.795 3.072-4.44 3.072-7.573 0-.673-.06-1.32-.17-1.95Z'
                  fill='#4285F4'
                />
                <path
                  d='M12.025 22c2.79 0 5.13-.925 6.84-2.505l-3.333-2.545c-.925.62-2.105.985-3.507.985-2.694 0-4.975-1.82-5.79-4.265H2.79v2.625A10.327 10.327 0 0 0 12.025 22Z'
                  fill='#34A853'
                />
                <path
                  d='M6.235 13.67a6.203 6.203 0 0 1-.325-1.97c0-.684.117-1.35.325-1.97V7.105H2.79a10.327 10.327 0 0 0 0 9.19l3.445-2.625Z'
                  fill='#FBBC05'
                />
                <path
                  d='M12.025 5.465c1.517 0 2.88.522 3.95 1.547l2.965-2.965C17.15 2.375 14.815 1.4 12.025 1.4A10.327 10.327 0 0 0 2.79 7.105L6.235 9.73c.815-2.445 3.096-4.265 5.79-4.265Z'
                  fill='#EA4335'
                />
              </svg>
              Empieza con Google
            </Link>
          </MotionPreset>
          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'down', offset: 30 }}
            delay={0.75}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='text-muted-foreground text-sm'
          >
            Sin tarjeta de crédito · Cancela cuando quieras
          </MotionPreset>
        </div>

        <div className='relative flex w-full items-end justify-center pt-19'>
          {/* Floating card 1 */}
          <MotionPreset
            fade
            motionProps={{
              animate: {
                x: [-2, 4, -2],
                opacity: 1
              },
              transition: {
                x: {
                  duration: 2.1,
                  repeat: Infinity,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.7,
                  delay: 1.2
                }
              }
            }}
            className='bg-card absolute top-[3.5%] left-[19%] flex -rotate-3 items-center gap-2 rounded-lg border px-3 py-1.5 max-lg:hidden'
          >
            <span className='grid size-8 place-content-center rounded-full border shadow-sm'>🎓</span>
            <span className='font-medium'>Nueva matrícula</span>
            <span className='text-muted-foreground text-xs'>Marketing Digital</span>
            <span className='ml-6 text-sm text-emerald-600'>+1 alumno</span>
          </MotionPreset>

          {/* Floating card 2 */}
          <MotionPreset
            fade
            motionProps={{
              animate: {
                y: [4, -4, 4],
                x: [-2, 0, -2],
                opacity: 1
              },
              transition: {
                y: {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeOut'
                },
                x: {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.7,
                  delay: 1.2
                }
              }
            }}
            className='bg-card absolute top-[16.4%] left-3 flex -rotate-3 items-center gap-1.5 rounded-full px-3 py-2 max-lg:hidden'
          >
            <span className='grid size-10 place-content-center rounded-full border shadow-sm'>
              <InfoIcon className='size-5.5' />
            </span>
            <div className='flex flex-col'>
              <span className='font-medium'>3 grupos completos este mes</span>
              <span className='text-muted-foreground text-xs'>Actualizado hace 1 min</span>
            </div>
          </MotionPreset>

          {/* Floating card 3 */}
          <MotionPreset
            fade
            motionProps={{
              animate: {
                y: [-4, 4, -4],
                opacity: 1
              },
              transition: {
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.7,
                  delay: 1.2
                }
              }
            }}
            className='bg-card absolute top-[7.5%] right-[10.5%] flex rotate-3 flex-col gap-1 rounded-xl border px-3 py-4 shadow-xl max-lg:hidden'
          >
            <span className='text-muted-foreground text-sm'>Matrículas este mes</span>
            <div className='flex items-center justify-between gap-2'>
              <span className='text-4xl font-semibold'>128</span>
              <span className='flex h-5 items-center gap-1 rounded-full bg-green-600/10 px-1 text-green-600 dark:bg-green-400/10 dark:text-green-400'>
                <span className='text-sm'>+24%</span>
                <ChevronUpIcon className='size-4' />
              </span>
            </div>
          </MotionPreset>
          {/* Floating card 4 */}
          <MotionPreset
            fade
            motionProps={{
              animate: {
                x: [6, -4, 6],
                y: [0, 2, 0],
                opacity: 1
              },
              transition: {
                x: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut'
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.7,
                  delay: 1.2
                }
              }
            }}
            className='bg-card absolute top-[21.75%] right-6 grid size-10.5 rotate-12 place-content-center rounded-full max-lg:hidden'
          >
            <StarBadge />
          </MotionPreset>

          {/* Card Behind 1 */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down' }}
            delay={1}
            transition={{ duration: 0.7 }}
            className='bg-background absolute right-1/2 bottom-0 aspect-square w-[28%] -translate-x-[78%] -rotate-2 rounded-md opacity-50 max-sm:hidden'
          />

          {/* Card Behind 2 */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down' }}
            delay={1}
            transition={{ duration: 0.7 }}
            className='bg-background absolute bottom-0 left-1/2 aspect-square w-[28%] translate-x-[78%] rotate-2 rounded-md opacity-50 max-sm:hidden'
          />

          {/* Widget card left */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down' }}
            delay={0.9}
            transition={{ duration: 0.7 }}
            className='absolute right-1/2 bottom-0 w-[32.25%] -translate-x-[38%] max-sm:hidden'
          >
            <img src='/images/widget-left.png' alt='Panel de gestión académica de ClassTrack' className='dark:hidden' />
            <img
              src='/images/widget-left.png'
              alt='Panel de gestión académica de ClassTrack'
              className='hidden dark:inline-block'
            />
          </MotionPreset>

          {/* Widget card right */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down' }}
            delay={0.9}
            transition={{ duration: 0.7 }}
            className='absolute bottom-0 left-1/2 w-[32.25%] translate-x-[38%] max-sm:hidden'
          >
            <img src='/images/widget-right.png' alt='Módulos de automatización para academias' className='dark:hidden' />
            <img
              src='/images/widget-right.png'
              alt='Módulos de automatización para academias'
              className='hidden dark:inline-block'
            />
          </MotionPreset>

          {/* Mobile Phone */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down' }}
            delay={0.8}
            transition={{ duration: 0.7 }}
            className='w-full max-w-[37.5%] min-w-xs'
          >
            <img src='/images/hero-mobile.png' alt='El software para academias ClassTrack' className='dark:hidden' />
            <img
              src='/images/hero-mobile.png'
              alt='Software para academias ClassTrack'
              className='hidden dark:inline-block'
            />
          </MotionPreset>
        </div>
        <div className='from-background absolute inset-x-0 bottom-0 h-16 bg-linear-to-t to-transparent' />
      </div>

      {/* Background Marquee */}
      <Marquee duration={50} gap={0} className='absolute inset-0 -z-1 p-0'>
        <img src='/images/cloud-image.webp' alt='Cloud image' className='inset-0 opacity-60 dark:hidden' />

        <img
          src='/images/cloud-image-dark.webp'
          alt='Cloud image dark'
          className='inset-0 hidden opacity-40 dark:inline-block'
        />
      </Marquee>

    </section>
  )
}

export default HeroSection
