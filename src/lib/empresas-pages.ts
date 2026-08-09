import type { FAQItem, LinkItem, MoneyPageTemplateProps } from '@/components/seo/money-page-template'

type EmpresasPageData = MoneyPageTemplateProps & {
  path: string
  metadataTitle: string
  metadataDescription: string
  keywords: string[]
}

const siteRelatedLinks: LinkItem[] = [
  { href: '/software-para-academias', label: 'Software para centros' },
  { href: '/gestion-de-academias', label: 'Gestión de centros' },
  { href: '/matriculas-online-para-academias', label: 'Matrículas online' },
  { href: '/articles', label: 'Artículos y recursos' }
]

const academiasIdiomasFaqs: FAQItem[] = [
  {
    question: '¿ClassTrack sirve para centros de idiomas con varios niveles y grupos?',
    answer:
      'Sí. Está pensado para organizar clientes, grupos y operativa diaria de forma centralizada, evitando herramientas dispersas.'
  },
  {
    question: '¿Puedo captar clientes desde una web y matricularlos online?',
    answer:
      'Sí. La idea es conectar la captación con la matrícula online y la gestión interna para reducir fricción y aumentar conversión.'
  },
  {
    question: '¿Se puede usar para varias sedes o centros?',
    answer:
      'Sí. Es una base escalable para centros en crecimiento que necesitan ordenar procesos sin multiplicar herramientas.'
  }
]

const refuerzoEscolarFaqs: FAQItem[] = [
  {
    question: '¿Es útil para centros con refuerzo por asignaturas o niveles?',
    answer:
      'Sí. Permite centralizar la información del cliente y la operativa del centro para trabajar con más control y menos carga administrativa.'
  },
  {
    question: '¿Ayuda a gestionar comunicación con familias?',
    answer:
      'Sí. Uno de los objetivos es simplificar el seguimiento y la comunicación en un mismo entorno, evitando canales sueltos.'
  },
  {
    question: '¿Puedo automatizar matrículas y cobros?',
    answer:
      'Sí. ClassTrack está diseñado para conectar matrícula, pagos y gestión diaria de forma más eficiente.'
  }
]

const oposicionesFaqs: FAQItem[] = [
  {
    question: '¿Sirve para centros con programas y preparación por convocatorias?',
    answer:
      'Sí. Te ayuda a mantener la operativa ordenada, con clientes, pagos y procesos internos centralizados.'
  },
  {
    question: '¿Puedo reducir tareas administrativas sin perder control?',
    answer:
      'Sí. El enfoque es centralizar datos y flujos para minimizar tareas repetitivas y errores manuales.'
  },
  {
    question: '¿Puede sustituir Excel y herramientas sueltas?',
    answer:
      'Sí. Precisamente busca reemplazar la dispersión por una plataforma unificada para el día a día del centro.'
  }
]

const musicaFaqs: FAQItem[] = [
  {
    question: '¿ClassTrack se adapta a centros de música con distintos formatos de clases?',
    answer:
      'Sí. Es una base flexible para organizar inscripciones, clientes y operativa interna con procesos más claros.'
  },
  {
    question: '¿Puedo facilitar el alta y las matrículas online?',
    answer:
      'Sí. La matrícula online reduce fricción y mejora la experiencia desde el primer contacto.'
  },
  {
    question: '¿Ayuda a tener más control sobre cobros y pagos?',
    answer:
      'Sí. Centralizar pagos y estado del cliente permite una gestión más eficiente y con menos incidencias.'
  }
]

const gimnasiosFaqs: FAQItem[] = [
  {
    question: '¿Sirve para gimnasios y centros que gestionan cuotas?',
    answer:
      'Sí. Te ayuda a centralizar altas, pagos y comunicación para una operativa más sencilla.'
  },
  {
    question: '¿Puedo conectar captación, inscripción y cobros?',
    answer:
      'Sí. El objetivo es que el proceso comercial y el administrativo trabajen conectados, sin saltos entre herramientas.'
  },
  {
    question: '¿Puedo usarlo si ya tengo una web?',
    answer:
      'Sí. Puedes evolucionar tu web y procesos de alta para mejorar conversión y orden operativo.'
  }
]

const psicologosFaqs: FAQItem[] = [
  {
    question: '¿ClassTrack es válido para despachos o equipos de psicología?',
    answer:
      'Sí. Está orientado a ordenar procesos de captación, inscripción y pagos en negocios de servicios, reduciendo tareas manuales.'
  },
  {
    question: '¿Puedo mejorar la experiencia de alta y gestión administrativa?',
    answer:
      'Sí. Centralizar el proceso reduce fricción para el cliente y simplifica el trabajo interno.'
  },
  {
    question: '¿Ayuda a tener visibilidad del estado de cada cliente?',
    answer:
      'Sí. La idea es trabajar con información unificada para que el equipo tenga más control y menos dispersión.'
  }
]

const coachesFaqs: FAQItem[] = [
  {
    question: '¿Funciona para coaches con servicios individuales o programas?',
    answer:
      'Sí. Te ayuda a estructurar captación, altas y cobros con procesos más claros y una experiencia más profesional.'
  },
  {
    question: '¿Puedo automatizar parte de la administración?',
    answer:
      'Sí. Al centralizar información y pasos del proceso, reduces tareas repetitivas y coordinación manual.'
  },
  {
    question: '¿Sirve para crecer sin aumentar complejidad?',
    answer:
      'Sí. Está pensado para escalar con menos fricción, evitando la dependencia de herramientas dispersas.'
  }
]

export const empresasPages: Record<string, EmpresasPageData> = {
  academiasIdiomas: {
    path: '/empresas/academias-de-idiomas',
    metadataTitle: 'Software para centros de idiomas',
    metadataDescription:
      'Software para centros de idiomas: web, matrículas online, clientes, pagos y comunicación en una sola plataforma. Descubre ClassTrack.',
    keywords: ['software centros de idiomas', 'software para centros de idiomas', 'gestión centros de idiomas', 'matrículas online idiomas'],
    badge: 'Empresas · Centros de idiomas',
    title: 'Software para centros de idiomas: más matrículas, menos fricción',
    intro:
      'ClassTrack ayuda a centros de idiomas a centralizar web, captación, matrículas online, pagos y gestión de clientes para crecer con procesos más claros.',
    highlights: ['Web orientada a conversión', 'Matrículas online conectadas', 'Gestión operativa centralizada'],
    problemsTitle: 'Problemas habituales en centros de idiomas',
    problems: [
      'La captación y la matrícula no están conectadas con la operativa real del centro.',
      'La información del cliente se dispersa entre hojas de cálculo, formularios y conversaciones.',
      'El aumento de clientes incrementa tareas administrativas y errores manuales.'
    ],
    benefitsTitle: 'Qué aporta ClassTrack',
    benefits: [
      'Un proceso más fluido desde la web hasta la matrícula y el alta del cliente.',
      'Más control sobre pagos, estado del cliente y comunicación desde un solo lugar.',
      'Una base operativa escalable para crecer sin multiplicar herramientas.'
    ],
    featuresTitle: 'Funciones clave para centros de idiomas',
    features: [
      'Web para centros de idiomas con estructura y mensajes orientados a captar clientes.',
      'Matrículas online que reducen fricción y aceleran altas.',
      'Gestión de clientes y operativa diaria desde una fuente única de información.',
      'Pagos y control administrativo centralizados para evitar errores y retrasos.',
      'Comunicación más ordenada para seguimiento y coordinación interna.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: academiasIdiomasFaqs,
    relatedLinks: siteRelatedLinks
  },
  refuerzoEscolar: {
    path: '/empresas/academias-de-refuerzo-escolar',
    metadataTitle: 'Software para centros de refuerzo escolar',
    metadataDescription:
      'Software para centros de refuerzo escolar: organiza clientes, matrículas, pagos y comunicación en una plataforma diseñada para crecer con control.',
    keywords: ['software centros de refuerzo escolar', 'gestión centros refuerzo', 'programa para centros de refuerzo', 'matrículas online refuerzo'],
    badge: 'Empresas · Refuerzo escolar',
    title: 'Software para centros de refuerzo escolar con gestión centralizada',
    intro:
      'ClassTrack te ayuda a ordenar la operativa de tu centro: clientes, matrículas, pagos y comunicación, evitando dispersión y procesos manuales.',
    highlights: ['Gestión por cliente', 'Operativa más clara', 'Menos tareas administrativas'],
    problemsTitle: 'Qué suele complicar la gestión del refuerzo escolar',
    problems: [
      'Cambios de grupos, horarios y coordinación generan carga operativa.',
      'La comunicación con familias se dispersa en múltiples canales.',
      'Los datos del cliente y el estado de pagos se pierden entre herramientas.'
    ],
    benefitsTitle: 'Resultados esperables',
    benefits: [
      'Más control sobre clientes, matrículas y pagos con menos fricción operativa.',
      'Procesos más ordenados para el equipo y mejor experiencia para familias.',
      'Una base escalable para crecer sin depender de hojas de cálculo.'
    ],
    featuresTitle: 'Funciones clave para centros de refuerzo',
    features: [
      'Matrículas online conectadas con la gestión interna para reducir trabajo manual.',
      'Gestión centralizada del cliente para seguimiento y coordinación más simple.',
      'Control administrativo y pagos más claros para evitar incidencias.',
      'Comunicación más ordenada entre equipo, clientes y familias.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: refuerzoEscolarFaqs,
    relatedLinks: siteRelatedLinks
  },
  oposiciones: {
    path: '/empresas/academias-de-oposiciones',
    metadataTitle: 'Software para centros de oposiciones',
    metadataDescription:
      'Software para centros de oposiciones: matrículas online, clientes, pagos y gestión centralizada para escalar sin perder control.',
    keywords: ['software centros de oposiciones', 'gestión centros oposiciones', 'programa para centro de oposiciones', 'matrículas online oposiciones'],
    badge: 'Empresas · Oposiciones',
    title: 'Software para centros de oposiciones: más control, menos administración',
    intro:
      'ClassTrack centraliza captación, matrículas, clientes y pagos para que tu centro de oposiciones trabaje con procesos más claros y escalables.',
    highlights: ['Operativa central', 'Procesos conectados', 'Escalabilidad'],
    problemsTitle: 'Problemas habituales en centros de oposiciones',
    problems: [
      'Los procesos comerciales y administrativos están separados y generan fricción.',
      'El crecimiento aumenta la carga de coordinación y el riesgo de errores manuales.',
      'Los datos se reparten entre Excel, formularios y canales de comunicación.'
    ],
    benefitsTitle: 'Qué consigues con ClassTrack',
    benefits: [
      'Más claridad sobre matrículas, pagos y estado de clientes desde una sola plataforma.',
      'Menos tareas repetitivas y mayor control de la operativa diaria.',
      'Una base sólida para crecer por convocatorias, programas o centros.'
    ],
    featuresTitle: 'Funciones clave para centros de oposiciones',
    features: [
      'Web y captación conectadas con la matrícula para reducir fricción.',
      'Matrículas online pensadas para aumentar conversión y acelerar el alta.',
      'Gestión centralizada del cliente y control administrativo en un mismo sistema.',
      'Pagos y seguimiento con información unificada para decisiones más claras.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: oposicionesFaqs,
    relatedLinks: siteRelatedLinks
  },
  musica: {
    path: '/empresas/academias-de-musica',
    metadataTitle: 'Software para centros de música',
    metadataDescription:
      'Software para centros de música: web, inscripciones, pagos y gestión operativa centralizados para crecer con menos fricción.',
    keywords: ['software centros de música', 'software para centros de musica', 'gestión centros de música', 'inscripciones centro de música'],
    badge: 'Empresas · Música',
    title: 'Software para centros de música con inscripción y gestión centralizadas',
    intro:
      'ClassTrack ayuda a centros de música a organizar inscripciones, clientes, pagos y operativa diaria con procesos más claros y una experiencia más profesional.',
    highlights: ['Inscripción más ágil', 'Operativa más ordenada', 'Pagos centralizados'],
    problemsTitle: 'Problemas habituales en centros de música',
    problems: [
      'La gestión diaria se dispersa entre herramientas y comunicaciones sueltas.',
      'La inscripción y el alta requieren demasiados pasos manuales.',
      'El control de pagos y estado del cliente no está centralizado.'
    ],
    benefitsTitle: 'Qué aporta ClassTrack',
    benefits: [
      'Una experiencia de inscripción más fluida y alineada con la imagen del centro.',
      'Más control operativo y menos carga administrativa para el equipo.',
      'Una base escalable para crecer sin aumentar complejidad.'
    ],
    featuresTitle: 'Funciones clave para centros de música',
    features: [
      'Web para presentar tu oferta y captar solicitudes de forma más efectiva.',
      'Matrículas online conectadas con la gestión interna del cliente.',
      'Control administrativo y de pagos desde un mismo lugar.',
      'Procesos conectados para reducir errores y coordinación manual.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: musicaFaqs,
    relatedLinks: siteRelatedLinks
  },
  gimnasios: {
    path: '/empresas/gimnasios',
    metadataTitle: 'Software para gimnasios',
    metadataDescription:
      'Software para gimnasios: altas, cuotas y comunicación centralizadas para ordenar tu operativa y mejorar la captación. Descubre ClassTrack.',
    keywords: ['software para gimnasios', 'gestión de gimnasios', 'altas online gimnasio', 'cuotas gimnasio software'],
    badge: 'Empresas · Gimnasios',
    title: 'Software para gimnasios: altas, cuotas y comunicación más simples',
    intro:
      'ClassTrack ayuda a gimnasios y centros deportivos a conectar captación, inscripción y pagos en una plataforma que reduce tareas manuales y mejora la experiencia.',
    highlights: ['Altas más rápidas', 'Cuotas centralizadas', 'Operativa más clara'],
    problemsTitle: 'Problemas habituales en gimnasios',
    problems: [
      'Altas y pagos se gestionan con procesos manuales o herramientas desconectadas.',
      'El equipo pierde tiempo coordinando datos y comunicaciones por varios canales.',
      'Escalar el negocio aumenta la complejidad operativa y los errores.'
    ],
    benefitsTitle: 'Qué consigues',
    benefits: [
      'Más claridad sobre altas y pagos con procesos más consistentes.',
      'Menos fricción para nuevos socios y mejor conversión desde la captación.',
      'Una base para crecer sin multiplicar herramientas.'
    ],
    featuresTitle: 'Funciones clave para gimnasios',
    features: [
      'Web orientada a conversión para captar solicitudes y altas.',
      'Procesos de inscripción conectados con pagos y operativa interna.',
      'Centralización de cuotas y estado de cada socio en un solo lugar.',
      'Comunicación más ordenada para mejorar el servicio.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: gimnasiosFaqs,
    relatedLinks: siteRelatedLinks
  },
  psicologos: {
    path: '/empresas/psicologos',
    metadataTitle: 'Software para psicólogos',
    metadataDescription:
      'Software para psicólogos y equipos: captación, inscripción y pagos más simples con procesos centralizados. Descubre ClassTrack.',
    keywords: ['software para psicólogos', 'gestión para psicólogos', 'captación pacientes', 'pagos consultas psicología'],
    badge: 'Empresas · Psicólogos',
    title: 'Software para psicólogos: captación y gestión administrativa más simple',
    intro:
      'ClassTrack ayuda a psicólogos y equipos a estructurar captación, altas y pagos con una plataforma que reduce dispersión y tareas manuales.',
    highlights: ['Procesos más claros', 'Menos fricción administrativa', 'Más control del estado del cliente'],
    problemsTitle: 'Problemas habituales en servicios profesionales',
    problems: [
      'La información del cliente se reparte entre herramientas y conversaciones.',
      'Los procesos de alta y cobro requieren coordinación manual.',
      'El crecimiento complica la operativa si no existe un sistema central.'
    ],
    benefitsTitle: 'Qué aporta ClassTrack',
    benefits: [
      'Procesos más consistentes para captar y dar de alta clientes.',
      'Centralización para reducir errores y carga administrativa.',
      'Mayor visibilidad sobre pagos y estado del cliente.'
    ],
    featuresTitle: 'Funciones clave para psicólogos',
    features: [
      'Web orientada a captar solicitudes y convertirlas en altas.',
      'Procesos conectados para inscripción y pagos con menos fricción.',
      'Centralización de información para trabajar con más orden.',
      'Comunicación más clara para mejorar la experiencia del cliente.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: psicologosFaqs,
    relatedLinks: siteRelatedLinks
  },
  coaches: {
    path: '/empresas/coaches',
    metadataTitle: 'Software para coaches',
    metadataDescription:
      'Software para coaches y programas: capta clientes, automatiza altas y centraliza cobros y comunicación con una sola plataforma.',
    keywords: ['software para coaches', 'gestión para coaches', 'captación clientes coaching', 'pagos coaching'],
    badge: 'Empresas · Coaches',
    title: 'Software para coaches: convierte clientes y automatiza tu operativa',
    intro:
      'ClassTrack ayuda a coaches a estructurar captación, altas y cobros con una plataforma unificada para reducir fricción y ganar eficiencia.',
    highlights: ['Más conversión', 'Altas más ágiles', 'Cobros y comunicación centralizados'],
    problemsTitle: 'Problemas habituales en coaching',
    problems: [
      'La captación y el alta se gestionan con herramientas dispersas.',
      'El cobro y la comunicación requieren demasiada coordinación manual.',
      'Crecimiento y más clientes implican más complejidad operativa.'
    ],
    benefitsTitle: 'Qué consigues',
    benefits: [
      'Procesos más claros desde la primera interacción hasta el alta.',
      'Menos tareas repetitivas y más foco en la entrega del servicio.',
      'Una base escalable para crecer con menos fricción.'
    ],
    featuresTitle: 'Funciones clave para coaches',
    features: [
      'Web orientada a captar leads y convertirlos en clientes.',
      'Proceso de alta conectado con pagos y operativa interna.',
      'Centralización de cobros y estado del cliente en una sola plataforma.',
      'Comunicación más ordenada para mejorar la experiencia.'
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: coachesFaqs,
    relatedLinks: siteRelatedLinks
  }
}

export function createEmpresasPageJsonLd(data: EmpresasPageData, siteUrl: string) {
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
            name: 'Empresas',
            item: `${siteUrl}/empresas`
          },
          {
            '@type': 'ListItem',
            position: 3,
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
