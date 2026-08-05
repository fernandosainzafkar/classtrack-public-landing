'use client'

import { Apple, Globe, Smartphone } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

const items = [
  {
    label: 'Navegador',
    icon: Globe,
    iconClassName: 'text-primary'
  },
  {
    label: 'iOS',
    icon: Apple,
    iconClassName: 'text-foreground'
  },
  {
    label: 'Android',
    icon: Smartphone,
    iconClassName: 'text-emerald-500'
  }
]

type PlatformStripProps = {
  className?: string
  variant?: 'light' | 'dark'
}

const PlatformStrip = ({ className, variant = 'light' }: PlatformStripProps) => {
  const isDark = variant === 'dark'

  return (
    <section className={cn('pt-5 pb-5 sm:pt-6 sm:pb-7 lg:pt-8 lg:pb-8', className)}>
      <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <MotionPreset
          component='p'
          fade
          slide={{ direction: 'down', offset: 30 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className={cn('mb-3 text-xs font-medium sm:text-sm', isDark ? 'text-white/65' : 'text-muted-foreground')}
        >
          En la nube. Trabaja desde tu PC, iOS o Android.
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 30 }}
          delay={0.1}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className='flex flex-wrap items-center justify-center gap-2.5'
        >
          {items.map(item => {
            const Icon = item.icon
            const iconClassName =
              isDark && item.label === 'iOS' ? 'text-white' : item.iconClassName

            return (
              <div
                key={item.label}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm backdrop-blur-sm',
                  isDark ? 'border-white/15 bg-white/6' : 'border-border/70 bg-background/80'
                )}
              >
                <Icon className={`size-3.5 sm:size-4 ${iconClassName}`} />
                <span className={cn('text-xs font-medium sm:text-sm', isDark ? 'text-white' : 'text-foreground')}>
                  {item.label}
                </span>
              </div>
            )
          })}
        </MotionPreset>
      </div>
    </section>
  )
}

export default PlatformStrip
