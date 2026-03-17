import ChecklistMinimalistic from '@/assets/svg/checklist-minimalistic'
import PhoneNotification from '@/assets/svg/phone-notification'
import Target from '@/assets/svg/target'
import UserId from '@/assets/svg/user-id'
import UsersArrow from '@/assets/svg/users-arrow'

export const FeaturesData = [
  {
    id: 'personalized-budgeting',
    icon: <UserId />,
    title: 'Haz que tu academia venda sola.',
    description:
      'Tu academia merece una página moderna adaptada a tu imagen, pensada para que tus futuros alumnos encuentren toda la información, elijan su curso ideal y se matriculen online sin fricciones.',
    position: 'left' as const
  },
  {
    id: 'smart-expense-tracking',
    icon: <ChecklistMinimalistic />,
    title: 'Optimiza cada etapa del recorrido de tus alumnos.',
    description: 'Acompaña a tus alumnos en cada etapa, desde el primer clic hasta después de su último curso. ',
    position: 'right' as const
  },
  {
    id: 'seamless-transactions',
    icon: <UsersArrow />,
    title: 'Simplifica la gestión administrativa.',
    description:
      'Automatiza las tareas tediosas y repetitivas de tu academia, reduce errores y gana tiempo para enfocarte en enseñar y hacer crecer tu comunidad.',
    position: 'left' as const
  },
  {
    id: 'goal-oriented-savings',
    icon: <Target />,
    title: 'Impulsa el crecimiento de tu academia.',
    description:
      'Toma decisiones estratégicas basadas en datos reales. Analiza el rendimiento de tus cursos, identifica oportunidades de mejora y planifica el futuro de tu academia con información precisa y actualizada.',
    position: 'right' as const
  },
  {
    id: 'instant-financial-insights',
    icon: <PhoneNotification />,
    title: 'Todo lo que necesitas, integrado y accesible.',
    description:
      'Centraliza la información de tus alumnos, cursos, pagos y comunicaciones en una única plataforma intuitiva y segura. Accede desde cualquier dispositivo y gestiona tu academia con total tranquilidad.',
    position: 'left' as const
  }
]
