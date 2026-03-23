import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionPreset fade blur slide={{ direction: 'down' }} delay={0.6} transition={{ duration: 0.5 }}>
          <Card className='group overflow-hidden rounded-4xl border-none pt-8 pb-0 shadow-none md:pt-16'>
            <CardContent className='flex gap-16 px-6 max-xl:flex-col max-lg:text-center md:px-20'>
              <div className='flex-1 space-y-4 md:pb-16'>
                <Badge className='border-primary text-primary px-3 py-1 text-sm [&>svg]:size-6' variant='outline'>
                  Solicita una demo
                </Badge>

                <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  Centraliza tu academia y prepárala para crecer
                </h2>

                <p className='text-muted-foreground mb-8 text-xl'>
                  Descubre cómo ClassTrack te ayuda a captar alumnos, automatizar matrículas, simplificar pagos y
                  gestionar tu operación diaria desde una sola plataforma.
                </p>

                <div className='flex flex-wrap items-center gap-4 max-lg:justify-center max-md:w-full max-md:flex-col'>
                  <Link
                    href='/contact'
                    className='bg-primary text-primary-foreground inline-flex min-w-50 items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-opacity hover:opacity-90'
                  >
                    Solicitar demo
                  </Link>

                  <Link
                    href='/pricing'
                    className='border-border bg-background text-foreground hover:bg-accent inline-flex min-w-50 items-center justify-center rounded-lg border px-6 py-3 text-base font-medium transition-colors'
                  >
                    Ver planes
                  </Link>
                </div>

                <p className='text-muted-foreground text-sm'>
                  Nuestro equipo de soporte está listo para ayudarte en lo que necesites.{' '}
                  <Link
                    href='/contact'
                    className='text-foreground underline underline-offset-4 transition-opacity hover:opacity-70'
                  >
                    Contáctanos →
                  </Link>
                </p>
              </div>

              <div className='flex flex-1 items-end justify-center'>
                <img
                  src='/images/cta-mobile.png'
                  alt='Panel de gestión de ClassTrack'
                  className='transition-transform duration-300 group-hover:scale-105 md:max-xl:w-100 dark:hidden'
                />
                <img
                  src='/images/cta-mobile.png'
                  alt='Panel de gestión de ClassTrack en modo oscuro'
                  className='hidden transition-transform duration-300 group-hover:scale-105 md:max-xl:w-100 dark:block'
                />
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      </div>
    </section>
  )
}

export default CTASection
