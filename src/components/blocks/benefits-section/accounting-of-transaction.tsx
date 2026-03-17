'use client'

import type { ReactNode } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

type ActivityItem = {
  title: string
  value: number
  icon: ReactNode
  difference: number
  type: 'positive' | 'warning'
  isBordered?: boolean
}

export type ActivityRow = {
  reverse: boolean
  activities: ActivityItem[]
}

const AcademyOperations = ({ activities }: { activities: ActivityRow[] }) => {
  return (
    <Card className='bg-muted group/palette h-full gap-6 border-0 shadow-none lg:col-span-2'>
      <MotionPreset
        fade
        blur
        slide={{ direction: 'down', offset: 15 }}
        delay={0.75}
        transition={{ duration: 0.5 }}
        className='relative flex min-h-68 flex-1 flex-col justify-center gap-6 overflow-hidden md:gap-10.5'
      >
        {activities.map((row, index) => (
          <Marquee key={index} pauseOnHover reverse={row.reverse} gap={0.625} duration={35 + index * 2} className='p-0'>
            {row.activities.map((activity, idx) => (
              <div
                key={idx}
                className={cn('flex h-14 items-center gap-3 rounded-full px-3.5 py-2', {
                  'border-primary/40 border': activity.isBordered,
                  'bg-card text-card-foreground': !activity.isBordered
                })}
              >
                <span
                  className={cn(
                    'grid size-9.5 place-content-center rounded-full [&>svg]:size-5',
                    activity.type === 'warning'
                      ? 'bg-destructive/20 text-destructive'
                      : 'bg-green-600/20 text-green-600 dark:bg-green-400/20 dark:text-green-400'
                  )}
                >
                  {activity.icon}
                </span>

                <div className='grid'>
                  <span className='text-muted-foreground text-xs'>{activity.title}</span>
                  <div className='flex items-center gap-1'>
                    <span className='text-base font-medium'>{activity.value.toLocaleString()}</span>
                    <span
                      className={cn('text-xs', {
                        'text-destructive': activity.type === 'warning',
                        'text-green-600 dark:text-green-400': activity.type === 'positive'
                      })}
                    >
                      {`${activity.type === 'warning' ? '-' : '+'}${activity.difference.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        ))}

        <div className='from-muted pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-linear-to-r from-20% to-transparent' />
        <div className='from-muted pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-linear-to-l from-20% to-transparent' />
      </MotionPreset>

      <CardContent className='flex flex-col gap-4 md:items-center'>
        <MotionPreset
          component='h3'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.9}
          transition={{ duration: 0.5 }}
          className='text-xl font-semibold md:text-center md:text-2xl'
        >
          Controla la operación diaria de tu academia
        </MotionPreset>

        <MotionPreset
          component='p'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={1.05}
          transition={{ duration: 0.5 }}
          className='text-muted-foreground text-base md:text-center md:text-lg'
        >
          Supervisa matrículas, pagos, actividad académica y tareas clave en tiempo real para gestionar tu academia con
          más control y menos trabajo manual.
        </MotionPreset>
      </CardContent>
    </Card>
  )
}

export default AcademyOperations
