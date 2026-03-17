'use client'

import { CheckIcon, FlameIcon } from 'lucide-react'

import LogoVector from '@/assets/svg/logo-vector'

import { Badge } from '@/components/ui/badge'
import { PrimarySwipeButton, SecondarySwipeButton } from '@/components/ui/swipe-button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

import type { PricingPlan } from '@/assets/data/pricing-section'

import { NumberTicker } from '@/components/ui/number-ticker'

type PricingProps = {
  plans: PricingPlan[]
}

const PricingSection = ({ plans }: PricingProps) => {
  return (
    <section id='pricing' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <Badge className='border-primary text-primary px-3 py-1 text-sm uppercase [&>svg]:size-6' variant='outline'>
              Pricing
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
            Precios que se adaptan a ti
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.7 }}
          >
            Precios flexibles diseñados para adaptarse a tu estilo de vida. Solo paga por las funciones que necesitas.
          </MotionPreset>
        </div>

        {/* Pricing Cards */}
        <div className='flex flex-col items-center justify-center gap-0 space-y-8 lg:flex-row'>
          {plans.map((plan, index) => {
            return (
              <MotionPreset
                key={index}
                fade
                blur
                slide={{ direction: 'down', offset: 15 }}
                delay={0.8 + index * 0.15}
                transition={{ duration: 0.5 }}
                className='max-w-lg flex-1'
              >
                <Card
                  key={index}
                  className={cn('bg-card/50 py-8 shadow-none', {
                    'bg-card': plan.isHighlighted,
                    'lg:rounded-r-none lg:border-r-0': index === 0, // Remove right border and radius for the left card
                    'lg:rounded-l-none lg:border-l-0': index === 2 // Remove left border and radius for the right card
                  })}
                >
                  <CardContent className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                      {/* Icon */}
                      <div className='bg-primary/10 flex size-11.5 items-center justify-center rounded-md p-1'>
                        {plan.icon}
                      </div>

                      <div className='space-y-1.5'>
                        {/* Plan Name */}
                        <div className='flex items-center gap-3.5'>
                          <h3 className='text-2xl font-semibold'>{plan.name}</h3>
                          {plan.isHighlighted && (
                            <Badge
                              variant='outline'
                              className='text-destructive [a&]:hover:bg-destructive/10 [a&]:hover:text-destructive/90 border-destructive flex items-center gap-1 rounded-full'
                            >
                              <FlameIcon className='size-3' />
                              Popular
                            </Badge>
                          )}
                          {plan.isLimited && (
                            <>
                              {/* Availability Badge */}
                              <div className='flex items-center gap-1.5 text-xs font-medium'>
                                <span className='relative flex size-2'>
                                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-400'></span>
                                  <span className='relative inline-flex size-2 rounded-full bg-green-600 dark:bg-green-400'></span>
                                </span>
                                Limited availability
                              </div>
                            </>
                          )}
                        </div>
                        {/* Description */}
                        <p className='text-muted-foreground'>{plan.description}</p>
                      </div>

                      {/* Price */}
                      <div className='flex items-baseline gap-1.5'>
                        <span className='text-xl font-semibold md:text-2xl lg:text-4xl'>
                          <NumberTicker value={plan.price.monthly} decimalPlaces={2} /> €
                        </span>
                        <span
                          className={cn('text-muted-foreground', {
                            'text-foreground': plan.isHighlighted
                          })}
                        >
                          /mes + IVA
                        </span>
                      </div>
                    </div>

                    <div className='flex flex-col gap-2.5'>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className='flex items-center gap-2 py-1'>
                          <div
                            className={cn('flex size-4.5 items-center justify-center rounded-full border p-0.5', {
                              'bg-background': plan.isHighlighted
                            })}
                          >
                            <CheckIcon className='size-3' />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {!plan.isHighlighted && (
                      <SecondarySwipeButton size='lg' className='rounded-full'>
                        See pricing
                      </SecondarySwipeButton>
                    )}
                    {plan.isHighlighted && (
                      <PrimarySwipeButton size='lg' className='rounded-full'>
                        See pricing
                      </PrimarySwipeButton>
                    )}
                  </CardContent>
                </Card>
              </MotionPreset>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
