import { CircleDollarSignIcon, ReceiptTextIcon, SendIcon } from 'lucide-react'

import type { Navigation } from '@/components/blocks/header-navigation'

export const navigationData: Navigation[] = [
  {
    title: 'Funcionalidades',
    subtitle: 'Core Features',
    imgSubtitle: 'Advance feature',
    contentClassName: '!w-140',
    items: [
      {
        icon: <CircleDollarSignIcon className='size-4' />,
        title: 'Personalized Budgeting',
        href: '/#personalized-budgeting',
        description: 'Set tailored budgets and stay on track effortlessly.'
      },
      {
        icon: <ReceiptTextIcon className='size-4' />,
        title: 'Smart Expense Tracking',
        href: '/#smart-expense-tracking',
        description: 'Track purchases and monitor spending habits instantly.'
      },
      {
        icon: <SendIcon className='size-4' />,
        title: 'Seamless Transactions',
        href: '/#seamless-transactions',
        description: 'Send and receive money securely with just taps.'
      }
    ],
    imageSection: {
      img: '/images/website.webp',
      href: '/#goal-oriented-savings',
      title: 'Goal-Oriented Savings',
      description: 'Save for what matters with automatic reminders.'
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
