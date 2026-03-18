import { CircleDollarSignIcon, ReceiptTextIcon, SendIcon } from 'lucide-react'

import type { Navigation } from '@/components/blocks/header-navigation'

export const navigationData: Navigation[] = [
  {
    title: 'Funcionalidades',
    subtitle: 'Plataforma',
    imgSubtitle: 'Gestión integral',
    contentClassName: '!w-140',
    items: [
      {
        icon: <CircleDollarSignIcon className='size-4' />,
        title: 'Gestión de matrículas y pagos',
        href: '/#personalized-budgeting',
        description: 'Centraliza cobros, matrículas y facturación en un solo lugar.'
      },
      {
        icon: <ReceiptTextIcon className='size-4' />,
        title: 'Control de alumnos y actividad',
        href: '/#smart-expense-tracking',
        description: 'Gestiona alumnos, cursos y seguimiento académico de forma sencilla.'
      },
      {
        icon: <SendIcon className='size-4' />,
        title: 'Automatización de procesos',
        href: '/#seamless-transactions',
        description: 'Reduce tareas manuales conectando tu operación en una única plataforma.'
      }
    ],
    imageSection: {
      img: '/images/website.webp',
      href: '/#goal-oriented-savings',
      title: 'Impulsa el crecimiento de tu academia',
      description: 'Mejora tu captación, organización y control con una solución centralizada.'
    }
  },
  {
    title: 'Beneficios',
    href: '/#benefits'
  },
  {
    title: 'Testimonios',
    href: '/#testimonials'
  },
  {
    title: 'Precios',
    href: '/#pricing'
  },
  {
    title: 'Blog',
    href: '/blog'
  }
]
