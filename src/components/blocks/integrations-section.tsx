'use client'

import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

type Integration = {
  name: string
  description: string
  logoSrc: string
  logoExt: 'svg' | 'png'
  accent: string
  bg: string
}

const integrations: Integration[] = [
  {
    name: 'Stripe',
    description: 'Pagos con tarjeta',
    logoSrc: '/images/integrations/stripe.svg',
    logoExt: 'svg',
    accent: '#635BFF',
    bg: '#635BFF'
  },
  {
    name: 'Holded',
    description: 'ERP y facturación',
    logoSrc: '/images/integrations/holded.png',
    logoExt: 'png',
    accent: '#0EA5A0',
    bg: '#0B2B4B'
  },
  {
    name: 'Mercado Pago',
    description: 'Pagos LATAM',
    logoSrc: '/images/integrations/mercadopago.svg',
    logoExt: 'svg',
    accent: '#009EE3',
    bg: '#009EE3'
  },
  {
    name: 'Moodle',
    description: 'Plataforma LMS',
    logoSrc: '/images/integrations/moodle.svg',
    logoExt: 'svg',
    accent: '#F7931E',
    bg: '#F7931E'
  },
  {
    name: 'Google Pixel',
    description: 'Seguimiento ads',
    logoSrc: '/images/integrations/googlepixel.svg',
    logoExt: 'svg',
    accent: '#4285F4',
    bg: '#4285F4'
  },
  {
    name: 'Alegra',
    description: 'Contabilidad y facturación',
    logoSrc: '/images/integrations/alegra.png',
    logoExt: 'png',
    accent: '#2ECC71',
    bg: '#0F766E'
  },
  {
    name: 'Meta Pixel',
    description: 'Remarketing Meta',
    logoSrc: '/images/integrations/metapixel.svg',
    logoExt: 'svg',
    accent: '#0866FF',
    bg: '#0866FF'
  },
  {
    name: 'WhatsApp',
    description: 'Atención al cliente',
    logoSrc: '/images/integrations/whatsapp.svg',
    logoExt: 'svg',
    accent: '#25D366',
    bg: '#25D366'
  }
]

const LogoChip = ({ integration }: { integration: Integration }) => {
  const isWhiteLogo = integration.bg !== '#FFFFFF'
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center overflow-hidden rounded-xl',
        integration.logoExt === 'svg'
          ? 'h-12 w-12 sm:h-14 sm:w-14'
          : 'h-12 w-12 bg-white sm:h-14 sm:w-14'
      )}
      style={{
        background: integration.logoExt === 'svg' ? integration.bg : '#FFFFFF',
        border: integration.bg === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
      }}
    >
      <img
        src={integration.logoSrc}
        alt={`Logo ${integration.name}`}
        className={cn(
          'object-contain',
          integration.logoExt === 'svg'
            ? isWhiteLogo
              ? 'h-7 w-7 invert-0 sm:h-8 sm:w-8'
              : 'h-7 w-7 sm:h-8 sm:w-8'
            : 'h-9 w-9 sm:h-10 sm:w-10'
        )}
        loading='lazy'
      />
    </div>
  )
}

const IntegrationsSection = () => {
  return (
    <section id='integrations' className='bg-card/30 py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-16 lg:px-8'>
        {/* Header */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <Badge className='border-primary text-primary px-3 py-1 text-sm uppercase [&>svg]:size-6' variant='outline'>
              Integraciones
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.15}
            transition={{ duration: 0.7 }}
          >
            Conecta ClassTrack con las herramientas que ya usas
          </MotionPreset>

          <MotionPreset
            component='p'
            className='mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.7 }}
          >
            Pagos, facturación, seguimiento publicitario, aprendizaje online y atención al cliente. Sincroniza todo tu stack sin esfuerzo.
          </MotionPreset>
        </div>

        {/* Integrations grid */}
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4'>
          {integrations.map((integration, index) => (
            <MotionPreset
              key={integration.name}
              fade
              blur
              slide={{ direction: 'up', offset: 20 }}
              delay={0.45 + index * 0.08}
              transition={{ duration: 0.5 }}
            >
              <div className='group flex h-full flex-col items-start gap-3 rounded-2xl border bg-background p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-6'>
                <LogoChip integration={integration} />
                <div className='flex flex-col gap-0.5'>
                  <h3 className='text-base font-semibold text-foreground sm:text-lg'>
                    {integration.name}
                  </h3>
                  <p
                    className='text-xs font-medium sm:text-sm'
                    style={{ color: integration.accent }}
                  >
                    {integration.description}
                  </p>
                </div>
              </div>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
