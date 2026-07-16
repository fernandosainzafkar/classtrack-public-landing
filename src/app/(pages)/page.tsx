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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Swipe',
      description:
        'Track expenses, manage budgets, and achieve your financial goals with Swipe - the app that puts you in control of your money.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
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
