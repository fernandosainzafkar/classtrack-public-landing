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
  ctaLabel: string
  ctaHref?: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Básico',
    icon: <Users />,
    price: 149,
    priceSuffix: '/mes',
    description: 'Ideal para centros de hasta 100 clientes',
    features: [
      '2 usuarios administradores',
      'Módulo de gestión académica',
      'Integración con Holded',
      'Integración con Moodle',
      'Soporte vía chat/correo'
    ],
    ctaLabel: 'Empieza tu prueba gratuita',
    ctaHref: 'https://admin.classtrack.academy/signup'
  },
  {
    name: 'Pro',
    icon: <Astronomy />,
    price: 2,
    priceSuffix: '/cliente',
    description: 'Pensado para centros en crecimiento de 101 a 500 clientes',
    features: [
      '5 usuarios administradores',
      'Módulo de gestión académica',
      'Integración con Holded',
      'Integración con Moodle',
      'Soporte vía account manager dedicado',
      'Acompañamiento personalizado a la implementación'
    ],
    isHighlighted: false,
    ctaLabel: 'Empieza tu prueba gratuita',
    ctaHref: 'https://admin.classtrack.academy/signup'
  },
  {
    name: 'Enterprise',
    icon: <Messages />,
    customPriceLabel: 'Contactar con ventas',
    description: 'Para centros, redes o multicampus con más de 500 clientes y necesidades avanzadas',
    features: [
      'Usuarios administradores ilimitados',
      'Módulos personalizados',
      'APIs e integraciones avanzadas con sistemas externos',
      'Gestión multicampus y franquicias'
    ],
    isLimited: false,
    ctaLabel: 'Solicitar demo'
  }
]
