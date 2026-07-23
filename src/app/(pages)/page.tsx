import type { Metadata } from 'next'
import Script from 'next/script'

import HeroSection from '@/components/blocks/hero-section/hero-section'
import Features from '@/components/blocks/features-section'
import Benefits from '@/components/blocks/benefits-section/benefits-section'
import Quote from '@/components/blocks/quote-section'
import Testimonials from '@/components/blocks/testimonials-section/testimonials-section'
import PricingSection from '@/components/blocks/pricing-section'
import FAQ from '@/components/blocks/faq-section'
import CTA from '@/components/blocks/cta-section'

import { FeaturesData } from '@/assets/data/features-section'
import { academyActivities, academyModules, academyEvents } from '@/assets/data/benefits-section'
import { testimonialsData } from '@/assets/data/testimonials'
import { pricingPlans } from '@/assets/data/pricing-section'
import { faqData } from '@/assets/data/faq-section'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.classtrack.academy'

export const metadata: Metadata = {
  title: 'Software para academias en España',
  description:
    'ClassTrack es el software de gestión para academias con web, matrículas online, alumnos, pagos y comunicación centralizados en una sola plataforma.',
  keywords: [
    'software para academias',
    'software de gestión para academias',
    'programa para academias',
    'matrículas online para academias',
    'software para centros de formación'
  ],
  alternates: {
    canonical: siteUrl
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
        'Software de gestión para academias con web, matrículas, alumnos, pagos y comunicación en una sola plataforma.',
      url: siteUrl,
      inLanguage: 'es-ES'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: 'ClassTrack',
      url: siteUrl,
      logo: `${siteUrl}/favicon/android-chrome-512x512.png`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ClassTrack',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Software para academias que centraliza captación, matrículas, gestión de alumnos, pagos y comunicación con familias y alumnos.',
      url: siteUrl,
      publisher: {
        '@id': `${siteUrl}#organization`
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(item => ({
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

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features features={FeaturesData} />
      <Benefits
        academyActivities={academyActivities}
        academyEvents={academyEvents}
        academyModules={academyModules}
      />
      <Quote />
      <Testimonials testimonials={testimonialsData} />
      <PricingSection plans={pricingPlans} />
      <FAQ faqItems={faqData} />
      <div id='soro-blog'></div>
      <Script src='https://app.trysoro.com/api/embed/0a7474dc-0774-436d-b11e-e614351e484d' strategy='afterInteractive' />
      <CTA />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default Home
