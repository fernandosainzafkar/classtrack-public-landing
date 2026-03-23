import LogoVector from '@/assets/svg/logo-vector'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'

import AcademyOperations from '@/components/blocks/benefits-section/accounting-of-transaction'
import type { ActivityRow } from '@/components/blocks/benefits-section/accounting-of-transaction'
import AcademyIntegrationsCard from '@/components/blocks/benefits-section/academy-integrations-card'
import AcademyGrowthCard from '@/components/blocks/benefits-section/updated-balanced-card'
import type { AcademyEventItem } from '@/components/blocks/benefits-section/updated-balanced-card'

const BenefitsSection = ({
  academyActivities,
  academyEvents,
  academyModules
}: {
  academyActivities: ActivityRow[]
  academyEvents: AcademyEventItem[]
  academyModules: string[]
}) => {
  return (
    <section id='benefits' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <Badge className='border-primary text-primary px-3 py-1 text-sm uppercase [&>svg]:size-6' variant='outline'>
              Ventajas
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
            Menos fricción operativa. Más control para crecer.
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-lg md:text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.7 }}
          >
            ClassTrack centraliza la captación, la gestión académica y la operativa diaria de tu academia para que tu
            equipo trabaje con más claridad, menos tareas manuales y una mejor experiencia para el alumno.
          </MotionPreset>
        </div>

        {/* Grid Section */}
        <div className='space-y-6'>
          {/* Grid Row 1 */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Card 1 */}
            <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} transition={{ duration: 0.5 }}>
              <AcademyGrowthCard totalStudents={1248} events={academyEvents} modules={academyModules} />
            </MotionPreset>

            {/* Card 2 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              <AcademyOperations activities={academyActivities} />
            </MotionPreset>
          </div>

          {/* Grid Row 2 */}
          <div className='grid gap-6 xl:grid-cols-5'>
            {/* Card 3 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.2}
              transition={{ duration: 0.5 }}
              className='min-h-140 sm:min-h-130 md:min-h-97.5 xl:col-span-3'
            >
              <Card className='group bg-muted relative h-full overflow-hidden border-0 shadow-none'>
                <CardContent className='flex h-full items-center justify-between gap-6 max-md:flex-col'>
                  <div className='flex flex-col gap-4 md:max-w-96'>
                    <MotionPreset
                      component='h3'
                      fade
                      blur
                      slide={{ direction: 'down', offset: 15 }}
                      delay={1.35}
                      className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                    >
                      Una experiencia clara para tu equipo y tus alumnos
                    </MotionPreset>

                    <MotionPreset
                      component='p'
                      fade
                      blur
                      slide={{ direction: 'down', offset: 15 }}
                      delay={1.5}
                      className='text-muted-foreground text-base md:text-lg'
                    >
                      Diseñado para simplificar procesos complejos: matrículas, seguimiento del alumno, pagos,
                      comunicación y gestión diaria en una interfaz intuitiva y fácil de adoptar.
                    </MotionPreset>
                  </div>

                  <MotionPreset
                    fade
                    blur
                    slide={{ direction: 'down', offset: 15 }}
                    delay={1.65}
                    className='relative size-full'
                  >
                    <img
                      src='/images/clean-ui-mobile.png'
                      alt='Vista de la plataforma ClassTrack'
                      className='absolute -bottom-6 h-86.25 transition-transform duration-300 group-hover:scale-105 max-md:left-1/2 max-md:-translate-x-1/2 md:right-10 dark:hidden'
                    />
                    <img
                      src='/images/clean-ui-mobile.png'
                      alt='Vista de la plataforma ClassTrack en modo oscuro'
                      className='absolute -bottom-6 hidden h-86.25 transition-transform duration-300 group-hover:scale-105 max-md:left-1/2 max-md:-translate-x-1/2 md:right-10 dark:block'
                    />
                  </MotionPreset>
                </CardContent>
              </Card>
            </MotionPreset>

            {/* Card 4 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.8}
              transition={{ duration: 0.5 }}
              className='xl:col-span-2'
            >
              <AcademyIntegrationsCard />
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
