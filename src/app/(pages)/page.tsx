import type { Metadata } from 'next'

import HeroSection from '@/components/blocks/hero-section/hero-section'
import Features from '@/components/blocks/features-section'
import Benefits from '@/components/blocks/benefits-section/benefits-section'
import Quote from '@/components/blocks/quote-section'
import IntegrationsSection from '@/components/blocks/integrations-section'
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
  title: 'ClassTrack | Software para centros en España',
  description:
    'ClassTrack es el software de gestión para centros con web, matrículas online, clientes, pagos y comunicación centralizados en una sola plataforma.',
  keywords: [
    'software para centros',
    'software de gestión para centros',
    'programa para centros',
    'matrículas online para centros',
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
        'Software de gestión para centros con web, matrículas, clientes, pagos y comunicación en una sola plataforma.',
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
        'Software para centros que centraliza captación, matrículas, gestión de clientes, pagos y comunicación con familias y clientes.',
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
      <IntegrationsSection />
      <Testimonials testimonials={testimonialsData} />
      <PricingSection plans={pricingPlans} />
      <FAQ faqItems={faqData} />
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
