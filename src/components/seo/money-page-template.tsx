import Link from 'next/link'

import CTA from '@/components/blocks/cta-section'
import { Badge } from '@/components/ui/badge'
import { CalendlyButton } from '@/components/ui/calendly-button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

type FAQItem = {
  question: string
  answer: string
}

type LinkItem = {
  href: string
  label: string
}

type MoneyPageTemplateProps = {
  badge: string
  title: string
  intro: string
  highlights: string[]
  problemsTitle: string
  problems: string[]
  benefitsTitle: string
  benefits: string[]
  featuresTitle: string
  features: string[]
  faqTitle: string
  faqs: FAQItem[]
  relatedLinks: LinkItem[]
}

const MoneyPageTemplate = ({
  badge,
  title,
  intro,
  highlights,
  problemsTitle,
  problems,
  benefitsTitle,
  benefits,
  featuresTitle,
  features,
  faqTitle,
  faqs,
  relatedLinks
}: MoneyPageTemplateProps) => {
  return (
    <>
      <section className='bg-muted/40 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-5xl space-y-8 text-center'>
          <Badge className='border-primary text-primary px-3 py-1 text-sm' variant='outline'>
            {badge}
          </Badge>
          <MotionPreset component='h1' fade slide={{ direction: 'down', offset: 30 }} className='text-3xl font-semibold md:text-5xl'>
            {title}
          </MotionPreset>
          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'down', offset: 30 }}
            delay={0.1}
            className='text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl'
          >
            {intro}
          </MotionPreset>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <CalendlyButton className='bg-primary text-primary-foreground inline-flex min-w-50 items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-opacity hover:opacity-90'>
              Solicitar demo
            </CalendlyButton>
            <Link
              href='/#pricing'
              className='border-border bg-background text-foreground hover:bg-accent inline-flex min-w-50 items-center justify-center rounded-lg border px-6 py-3 text-base font-medium transition-colors'
            >
              Ver planes
            </Link>
          </div>
          <div className='grid gap-4 text-left md:grid-cols-3'>
            {highlights.map(item => (
              <Card key={item} className='shadow-none'>
                <CardContent className='px-6 py-5 text-base font-medium'>{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-2'>
          <Card className='shadow-none'>
            <CardContent className='space-y-4 px-6 py-8 md:px-8'>
              <h2 className='text-2xl font-semibold md:text-3xl'>{problemsTitle}</h2>
              <ul className='text-muted-foreground space-y-3 text-base'>
                {problems.map(item => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className='shadow-none'>
            <CardContent className='space-y-4 px-6 py-8 md:px-8'>
              <h2 className='text-2xl font-semibold md:text-3xl'>{benefitsTitle}</h2>
              <ul className='text-muted-foreground space-y-3 text-base'>
                {benefits.map(item => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='bg-muted px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-6xl space-y-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{featuresTitle}</h2>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {features.map(item => (
              <Card key={item} className='h-full shadow-none'>
                <CardContent className='px-6 py-6'>
                  <p className='text-base leading-7'>{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-4xl space-y-8'>
          <div className='text-center'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{faqTitle}</h2>
          </div>
          <div className='space-y-4'>
            {faqs.map(item => (
              <Card key={item.question} className='shadow-none'>
                <CardContent className='space-y-3 px-6 py-6'>
                  <h3 className='text-lg font-semibold'>{item.question}</h3>
                  <p className='text-muted-foreground leading-7'>{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24'>
        <div className='mx-auto max-w-5xl space-y-6 rounded-3xl border p-6 md:p-8'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-semibold md:text-3xl'>Recursos relacionados</h2>
            <p className='text-muted-foreground'>
              Explora otras páginas estratégicas de ClassTrack para seguir evaluando la mejor solución para tu academia.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            {relatedLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='border-border bg-background text-foreground hover:bg-accent inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export type { FAQItem, LinkItem, MoneyPageTemplateProps }
export default MoneyPageTemplate
