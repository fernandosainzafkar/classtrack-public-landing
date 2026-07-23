import type { Metadata } from 'next'

import HeroBadge from '@/components/blocks/hero-section/hero-badge'
import BlogSection from '@/components/blog/blog-section/blog-section'
import { getPosts } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { PrimarySwipeButton } from '@/components/ui/swipe-button'
import { MotionPreset } from '@/components/ui/motion-preset'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.classtrack.academy'

export const metadata: Metadata = {
  title: 'Artículos y recursos para academias',
  description:
    'Guías, ideas y recursos sobre gestión de academias, matrículas, captación de alumnos, pagos y digitalización de centros formativos.',
  keywords: [
    'artículos para academias',
    'recursos para academias',
    'gestión de academias',
    'matrículas online',
    'captación de alumnos'
  ],
  alternates: {
    canonical: `${siteUrl}/articles`
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: 'ClassTrack',
      description:
        'Software para academias con web, matrículas, alumnos, pagos y comunicación en una sola plataforma.',
      url: siteUrl,
      inLanguage: 'es-ES'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/articles#webpage`,
      name: 'Artículos y recursos para academias',
      description:
        'Colección de artículos y recursos sobre gestión, digitalización, matrículas y crecimiento de academias.',
      url: `${siteUrl}/articles`,
      isPartOf: {
        '@id': `${siteUrl}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${siteUrl}/articles`]
      }
    }
  ]
}

const ArticlesPage = async () => {
  const posts = await getPosts()

  return (
    <>
      {/* Header */}
      <section className='mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-center sm:py-12 lg:py-16'>
        <HeroBadge />
        <MotionPreset
          component='h1'
          fade
          slide={{ direction: 'down', offset: 50 }}
          delay={0.2}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='text-2xl font-semibold md:text-3xl lg:text-5xl'
        >
          Recursos y guías para gestionar tu academia
        </MotionPreset>
        <MotionPreset
          component='p'
          fade
          slide={{ direction: 'down', offset: 50 }}
          delay={0.4}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='text-muted-foreground text-xl'
        >
          Explora artículos sobre matrículas, captación de alumnos, pagos, automatización y gestión diaria para academias
          y centros formativos.
        </MotionPreset>
      </section>

      <BlogSection posts={posts} />

      <section className='bg-muted py-8 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <Card className='group overflow-hidden rounded-4xl border-none pt-8 pb-0 shadow-none md:pt-16'>
            <CardContent className='grid grid-cols-1 gap-16 px-6 max-lg:text-center md:px-20 lg:grid-cols-2'>
              <div className='col-span-1 flex-1 space-y-4 md:pb-16'>
                <Badge className='border-primary text-primary px-3 py-1 text-sm [&>svg]:size-6' variant='outline'>
                  Demo
                </Badge>
                <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  ¿Quieres digitalizar tu academia?
                </h2>
                <p className='text-muted-foreground mb-8 text-xl'>
                  Descubre cómo centralizar web, matrículas, alumnos, pagos y comunicación desde una única plataforma
                  diseñada para academias.
                </p>
                <form className='flex gap-3 max-lg:justify-center max-md:flex-col'>
                  <Input
                    type='email'
                    placeholder='Tu email profesional'
                    name='email'
                    className='w-full rounded-full md:max-w-72'
                    required
                  />
                  <PrimarySwipeButton>Solicitar demo</PrimarySwipeButton>
                </form>
              </div>
              <div className='col-span-1 flex flex-1 items-end justify-center'>
                <MotionPreset fade blur slide={{ direction: 'down' }} delay={0.6} transition={{ duration: 0.5 }}>
                  <img
                    src='/images/cta-mobile.png'
                    alt='Panel de gestión para academias'
                    className='transition-transform duration-300 group-hover:scale-105 dark:hidden'
                  />
                  <img
                    src='/images/cta-mobile.png'
                    alt='Panel de gestión para academias'
                    className='hidden transition-transform duration-300 group-hover:scale-105 dark:block'
                  />
                </MotionPreset>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default ArticlesPage
