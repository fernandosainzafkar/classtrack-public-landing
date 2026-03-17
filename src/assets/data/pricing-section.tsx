import type { ReactNode } from 'react'

import Users from '@/assets/svg/users'
import Astronomy from '@/assets/svg/astronomy'
import Messages from '@/assets/svg/messages'

export type PricingPlan = {
  name: string
  icon: ReactNode
  price?: number
  priceSuffix?: string
  customPriceLabel?: string
  description: string
  features: string[]
  isHighlighted?: boolean
  isLimited?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Básico',
    icon: <Users />,
    price: 149,
    priceSuffix: '/mes',
    description: 'Hasta 100 alumnos.',
    features: [
      '2 usuarios administradores',
      'Módulo de gestión académica',
      'Integración con Holded',
      'Integración con Moodle',
      'Soporte vía chat/correo'
    ]
  },
  {
    name: 'Pro',
    icon: <Astronomy />,
    price: 2,
    priceSuffix: '/alumno',
    description: 'For individuals who want a fully comprehensive solution to manage every aspect of their finances.',
    features: [
      '5 usuarios administradores',
      'Módulo de gestión académica',
      'Integración con Holded',
      'Integración con Moodle',
      'Soporta vía account manager dedicado',
      'Acompañamiento personalizado a la implementación'
    ],
    isHighlighted: true
  },
  {
    name: 'Enterprise',
    icon: <Messages />,
    customPriceLabel: 'Contactar con ventas',
    description: 'For those who want to go a step further with more in-depth budgeting and tracking features.',
    features: [
      'Usuarios administradores ilimitados',
      'Módulos personalizados',
      'APIs e integraciones avanzadas con sistemas externos',
      'Gestión multicampus y franquicias'
    ],
    isLimited: true
  }
]
