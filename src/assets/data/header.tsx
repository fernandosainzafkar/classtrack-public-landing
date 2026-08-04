import { BookOpenIcon, DumbbellIcon, GraduationCapIcon, LanguagesIcon, MusicIcon, SparklesIcon, UsersIcon, CircleDollarSignIcon, ReceiptTextIcon, SendIcon } from 'lucide-react'

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
  },
  {
    title: 'Empresas',
    subtitle: 'Plataforma',
    imgSubtitle: 'Gestión integral',
    contentClassName: '!w-140',
    items: [
      {
        icon: <LanguagesIcon className='size-4' />,
        title: 'Academias de idiomas',
        href: '/empresas/academias-de-idiomas',
        description: 'Web, matrículas online, pagos y gestión de alumnos para academias de idiomas.'
      },
      {
        icon: <BookOpenIcon className='size-4' />,
        title: 'Academias de refuerzo escolar',
        href: '/empresas/academias-de-refuerzo-escolar',
        description: 'Organiza alumnos, grupos, pagos y comunicación en centros de apoyo escolar.'
      },
      {
        icon: <GraduationCapIcon className='size-4' />,
        title: 'Academias de oposiciones',
        href: '/empresas/academias-de-oposiciones',
        description: 'Gestiona matrículas, alumnos, pagos y seguimiento para preparación de oposiciones.'
      },
      {
        icon: <MusicIcon className='size-4' />,
        title: 'Academias de música',
        href: '/empresas/academias-de-musica',
        description: 'Centraliza inscripciones, gestión de clases y cobros en academias de música.'
      },
       {
        icon: <DumbbellIcon className='size-4' />,
        title: 'Gimnasios',
        href: '/empresas/gimnasios',
        description: 'Gestiona altas, cuotas y comunicación con socios desde una sola plataforma.'
      },
      {
        icon: <UsersIcon className='size-4' />,
        title: 'Psicólogos',
        href: '/empresas/psicologos',
        description: 'Simplifica captación, inscripción y pagos para servicios profesionales y sesiones.'
      },
      {
        icon: <SparklesIcon className='size-4' />,
        title: 'Coaches',
        href: '/empresas/coaches',
        description: 'Convierte clientes, automatiza altas y centraliza cobros y comunicación.'
      }
    ],
  },

  {
    title: 'Precios',
    href: '/#pricing'
  }
]
