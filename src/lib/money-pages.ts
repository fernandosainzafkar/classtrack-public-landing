import type { FAQItem, LinkItem, MoneyPageTemplateProps } from '@/components/seo/money-page-template'

type MoneyPageData = MoneyPageTemplateProps & {
  path: string
  metadataTitle: string
  metadataDescription: string
  keywords: string[]
}

const commonRelatedLinks: LinkItem[] = [
  { href: '/software-para-academias', label: 'Software para academias' },
  { href: '/gestion-de-academias', label: 'Gestión de academias' },
  { href: '/matriculas-online-para-academias', label: 'Matrículas online para academias' },
  { href: '/articles', label: 'Artículos y recursos' }
]

const softwareFaqs: FAQItem[] = [
  {
    question: '¿Qué incluye un software para academias como ClassTrack?',
    answer:
      'ClassTrack reúne web, matrículas online, gestión de alumnos, pagos, comunicación y operativa diaria para que tu academia trabaje desde una sola plataforma.'
  },
  {
    question: '¿Sirve para academias pequeñas y para centros en crecimiento?',
    answer:
      'Sí. Está pensado para academias que necesitan ordenar su gestión hoy y seguir escalando sin depender de hojas de cálculo, herramientas sueltas o procesos manuales.'
  },
  {
    question: '¿Puede sustituir varias herramientas separadas?',
    answer:
      'Ese es precisamente uno de sus objetivos: reducir fricción operativa centralizando captación, matrículas, alumnos, pagos y comunicación en un mismo sistema.'
  }
]

const managementFaqs: FAQItem[] = [
  {
    question: '¿Qué procesos cubre la gestión de academias con ClassTrack?',
    answer:
      'Puedes centralizar alumnos, grupos, matrículas, pagos, comunicación, seguimiento y parte de la operativa comercial desde una única herramienta.'
  },
  {
    question: '¿Es útil si hoy gestiono todo con hojas de cálculo?',
    answer:
      'Sí. De hecho, una de las principales ventajas es dejar atrás la dispersión de datos para trabajar con información unificada y procesos más trazables.'
  },
  {
    question: '¿Ayuda a reducir tareas administrativas?',
    answer:
      'Sí. La automatización y la centralización reducen tareas repetitivas, errores manuales y tiempo dedicado a coordinación interna.'
  }
]

const enrollmentFaqs: FAQItem[] = [
  {
    question: '¿Puedo conectar el formulario de inscripción con la gestión interna?',
    answer:
      'Sí. El objetivo es que la matrícula online no se quede aislada, sino que alimente directamente la operativa de tu academia.'
  },
  {
    question: '¿Las matrículas online sirven para captar más alumnos?',
    answer:
      'Sí, porque reducen fricción, aceleran el alta y ofrecen una mejor experiencia a las personas interesadas en tus cursos o programas.'
  },
  {
    question: '¿Se puede adaptar a distintos tipos de cursos y academias?',
    answer:
      'Sí. El proceso de inscripción puede plantearse para distintas ofertas formativas, grupos y procesos internos según la realidad de cada centro.'
  }
]

export const moneyPages: Record<string, MoneyPageData> = {
  software: {
    path: '/software-para-academias',
    metadataTitle: 'Software para academias',
    metadataDescription:
      'Software para academias con web, matrículas online, alumnos, pagos y comunicación en una sola plataforma. Descubre ClassTrack.',
    keywords: [
      'software para academias',
      'software de gestión para academias',
      'programa para academias',
      'software academias España'
    ],
    badge: 'Software para academias',
    title: 'Software para academias que centraliza captación, gestión y crecimiento',
    intro:
      'ClassTrack es el software para academias diseñado para crear tu web, captar alumnos, automatizar matrículas y ordenar la gestión diaria desde una única plataforma.',
    highlights: ['Web para academias', 'Matrículas online', 'Alumnos, pagos y comunicación centralizados'],
    problemsTitle: 'Problemas que resuelve',
    problems: [
      'Evita trabajar con hojas de cálculo, formularios, emails y herramientas desconectadas.',
      'Reduce errores administrativos provocados por procesos manuales y datos duplicados.',
      'Mejora la experiencia de matrícula y seguimiento para alumnos, familias y equipo interno.'
    ],
    benefitsTitle: 'Qué consigues con ClassTrack',
    benefits: [
      'Una base operativa clara para crecer sin perder control sobre la academia.',
      'Más visibilidad sobre matrículas, pagos, alumnos y rendimiento del centro.',
      'Menos carga administrativa y más tiempo para centrarte en la experiencia educativa.'
    ],
    featuresTitle: 'Qué debe tener un buen software para academias',
    features: [
      'Una web profesional para presentar tu propuesta formativa y convertir visitas en leads.',
      'Procesos de matrícula online conectados con la gestión del alumno desde el primer contacto.',
      'Control de pagos, estado de alumnos y comunicación en un mismo entorno.',
      'Soporte para ordenar la operativa diaria de grupos, seguimiento y tareas administrativas.',
      'Base tecnológica preparada para crecer con tu academia sin multiplicar herramientas.',
      'Datos centralizados para tomar decisiones de negocio con más criterio.'
    ],
    faqTitle: 'Preguntas frecuentes sobre software para academias',
    faqs: softwareFaqs,
    relatedLinks: commonRelatedLinks
  },
  management: {
    path: '/gestion-de-academias',
    metadataTitle: 'Gestión de academias',
    metadataDescription:
      'Optimiza la gestión de tu academia con una plataforma que centraliza alumnos, matrículas, pagos, comunicación y operativa diaria.',
    keywords: [
      'gestión de academias',
      'software de gestión para academias',
      'gestión de alumnos academia',
      'programa de gestión para academias'
    ],
    badge: 'Gestión de academias',
    title: 'Gestión de academias más ordenada, ágil y escalable',
    intro:
      'Digitaliza la gestión de tu academia con una plataforma que conecta captación, matrículas, alumnos, pagos y procesos internos para trabajar con más control y menos fricción.',
    highlights: ['Gestión centralizada', 'Menos tareas manuales', 'Más control operativo'],
    problemsTitle: 'Qué suele fallar en la gestión de academias',
    problems: [
      'Los datos del negocio están repartidos entre varias herramientas y personas.',
      'La coordinación entre captación, administración y seguimiento se vuelve lenta e ineficiente.',
      'Crecer en alumnos aumenta la carga operativa y los errores si no hay un sistema central.'
    ],
    benefitsTitle: 'Ventajas de una gestión centralizada',
    benefits: [
      'Todos los procesos clave del centro están conectados y son más fáciles de supervisar.',
      'El equipo gana eficiencia al reducir duplicidades y tareas que no aportan valor.',
      'La dirección accede a una visión más clara del rendimiento y de las prioridades del negocio.'
    ],
    featuresTitle: 'Elementos clave para mejorar la gestión de academias',
    features: [
      'Seguimiento de alumnos y grupos desde una única fuente de información.',
      'Matrículas, pagos y comunicación integrados en la operativa diaria.',
      'Menos dependencia de herramientas improvisadas como hojas de cálculo o documentos sueltos.',
      'Flujos más claros entre marketing, administración y experiencia del alumno.',
      'Mejor trazabilidad para saber qué está funcionando y dónde hay cuellos de botella.',
      'Capacidad de crecimiento sin que la complejidad del negocio se dispare.'
    ],
    faqTitle: 'Preguntas frecuentes sobre gestión de academias',
    faqs: managementFaqs,
    relatedLinks: commonRelatedLinks
  },
  enrollment: {
    path: '/matriculas-online-para-academias',
    metadataTitle: 'Matrículas online para academias',
    metadataDescription:
      'Simplifica las matrículas online de tu academia con una experiencia digital conectada a alumnos, pagos y operativa interna.',
    keywords: [
      'matrículas online para academias',
      'inscripciones online academia',
      'software matrículas academia',
      'captación de alumnos academia'
    ],
    badge: 'Matrículas online',
    title: 'Matrículas online para academias sin fricción ni procesos manuales',
    intro:
      'Haz que el proceso de inscripción de tu academia sea más ágil y profesional con matrículas online conectadas a la gestión de alumnos, pagos y seguimiento interno.',
    highlights: ['Inscripciones más ágiles', 'Mejor conversión', 'Menos carga administrativa'],
    problemsTitle: 'Fricciones habituales en las matrículas',
    problems: [
      'Los formularios y solicitudes no están conectados con la operativa real del centro.',
      'El equipo pierde tiempo persiguiendo datos, pagos y documentación por varios canales.',
      'La experiencia del futuro alumno es lenta y poco clara, lo que reduce conversiones.'
    ],
    benefitsTitle: 'Qué aportan las matrículas online',
    benefits: [
      'Mejoran la experiencia de alta y reducen abandono durante la inscripción.',
      'Permiten conectar captación y operativa para que el equipo actúe más rápido.',
      'Ayudan a escalar campañas y acciones comerciales sin multiplicar el trabajo manual.'
    ],
    featuresTitle: 'Qué debe ofrecer una solución de matrículas online para academias',
    features: [
      'Formularios y procesos de inscripción diseñados para convertir mejor.',
      'Conexión con la ficha del alumno y con el proceso administrativo posterior.',
      'Mayor claridad para el equipo sobre solicitudes pendientes, documentación y pagos.',
      'Experiencia digital coherente con la imagen profesional de la academia.',
      'Capacidad para adaptar el proceso a distintos cursos, programas o centros.',
      'Visibilidad del embudo desde la captación hasta la matrícula completada.'
    ],
    faqTitle: 'Preguntas frecuentes sobre matrículas online para academias',
    faqs: enrollmentFaqs,
    relatedLinks: commonRelatedLinks
  }
}

export function createMoneyPageJsonLd(data: MoneyPageData, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: 'ClassTrack',
        url: siteUrl,
        inLanguage: 'es-ES'
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}${data.path}#webpage`,
        name: data.metadataTitle,
        description: data.metadataDescription,
        url: `${siteUrl}${data.path}`,
        isPartOf: {
          '@id': `${siteUrl}#website`
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: data.metadataTitle,
            item: `${siteUrl}${data.path}`
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ]
  }
}
