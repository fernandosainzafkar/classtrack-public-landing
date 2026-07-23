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
    description: 'Ideal para academias de hasta 100 alumnos',
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
    description: 'Pensado para academias en crecimiento de 101 a 500 alumnos',
    features: [
      '5 usuarios administradores',
      'Módulo de gestión académica',
      'Integración con Holded',
      'Integración con Moodle',
      'Soporte vía account manager dedicado',
      'Acompañamiento personalizado a la implementación'
    ],
    isHighlighted: false
  },
  {
    name: 'Enterprise',
    icon: <Messages />,
    customPriceLabel: 'Contactar con ventas',
    description: 'Para academias, redes o multicampus con más de 500 alumnos y necesidades avanzadas',
    features: [
      'Usuarios administradores ilimitados',
      'Módulos personalizados',
      'APIs e integraciones avanzadas con sistemas externos',
      'Gestión multicampus y franquicias'
    ],
    isLimited: false
  }
]
