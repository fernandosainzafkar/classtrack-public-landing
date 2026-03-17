

import type { ActivityRow } from '@/components/blocks/benefits-section/accounting-of-transaction'
import type { AcademyEventItem } from '@/components/blocks/benefits-section/updated-balanced-card'

export const academyEvents: AcademyEventItem[] = [
  { id: '1', amount: 12, type: 'increase' },
  { id: '2', amount: 8, type: 'increase' },
  { id: '3', amount: 3, type: 'decrease' },
  { id: '4', amount: 15, type: 'increase' },
  { id: '5', amount: 2, type: 'decrease' }
]

export const academyModules = [
  'CRM',
  'Matrículas',
  'Pagos',
  'Cursos',
  'Alumnos',
  'Reportes',
  'Automatizaciones',
  'Moodle'
]

export const academyActivities: ActivityRow[] = [
  {
    reverse: false,
    activities: [
      {
        title: 'Nuevas matrículas',
        value: 128,
        difference: 24,
        type: 'positive',
        icon: '🎓'
      },
      {
        title: 'Pagos confirmados',
        value: 94,
        difference: 18,
        type: 'positive',
        icon: '💳',
        isBordered: true
      },
      {
        title: 'Leads activos',
        value: 312,
        difference: 36,
        type: 'positive',
        icon: '📥'
      }
    ]
  },
  {
    reverse: true,
    activities: [
      {
        title: 'Pagos pendientes',
        value: 17,
        difference: 5,
        type: 'warning',
        icon: '⚠️'
      },
      {
        title: 'Alumnos activos',
        value: 1248,
        difference: 112,
        type: 'positive',
        icon: '👥',
        isBordered: true
      },
      {
        title: 'Cursos en marcha',
        value: 26,
        difference: 4,
        type: 'positive',
        icon: '📚'
      }
    ]
  }
]
