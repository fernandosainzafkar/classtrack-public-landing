import ChecklistMinimalistic from '@/assets/svg/checklist-minimalistic'
import PhoneNotification from '@/assets/svg/phone-notification'
import Target from '@/assets/svg/target'
import UserId from '@/assets/svg/user-id'
import UsersArrow from '@/assets/svg/users-arrow'

export const FeaturesData = [
  {
    id: 'personalized-budgeting',
    icon: <UserId />,
    title: 'Crea la web de tu academia y capta más matrículas.',
    description:
      'Publica una web profesional adaptada a tu marca para que tus futuros alumnos descubran tu oferta formativa, encuentren la información clave y completen su matrícula online sin fricción.',
    position: 'left' as const
  },
  {
    id: 'smart-expense-tracking',
    icon: <ChecklistMinimalistic />,
    title: 'Automatiza matrículas, formularios e inscripciones.',
    description:
      'Optimiza el proceso de captación y admisión con formularios, solicitudes y matrículas digitales que reducen tareas manuales y mejoran la conversión.',
    position: 'right' as const
  },
  {
    id: 'seamless-transactions',
    icon: <UsersArrow />,
    title: 'Gestiona alumnos, grupos y operativa diaria.',
    description:
      'Centraliza alumnos, clases, grupos, seguimiento y tareas administrativas para que tu equipo trabaje con más orden, menos errores y mayor eficiencia.',
    position: 'left' as const
  },
  {
    id: 'goal-oriented-savings',
    icon: <Target />,
    title: 'Controla pagos, asistencia y rendimiento en tiempo real.',
    description:
      'Consulta métricas clave de tu academia, visualiza la evolución de matrículas y pagos, y toma decisiones apoyadas en datos reales de tu negocio.',
    position: 'right' as const
  },
  {
    id: 'instant-financial-insights',
    icon: <PhoneNotification />,
    title: 'Todo tu centro formativo en una sola plataforma.',
    description:
      'Integra web, gestión académica, pagos, comunicación y automatizaciones en una solución intuitiva y segura accesible desde cualquier dispositivo.',
    position: 'left' as const
  }
]
