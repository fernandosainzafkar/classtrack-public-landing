import { InstagramIcon, MailIcon, TwitchIcon, YoutubeIcon } from 'lucide-react'

import Link from 'next/link'

import HoverText from '@/components/layout/footer/hover-text'
import Logo from '@/components/logo'

const Footer = () => {
  return (
    <footer className='bg-muted relative overflow-hidden'>
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8'>
        <div className='text-muted-foreground space-y-8'>
          <div className='flex justify-between gap-8 max-lg:flex-col'>
            <div className='space-y-3'>
              <Link href='/#home' className='text-foreground block'>
                <Logo />
              </Link>
              <p className='max-w-lg'>ClassTrack es una plataforma todo en uno para la gestión de tu academia.</p>
            </div>

            <div className='flex gap-20 max-sm:flex-col max-sm:gap-8'>
              <div className='flex flex-col gap-5'>
                <h3 className='text-foreground text-lg font-semibold'>Company</h3>
                <div className='flex flex-col gap-3'>
                  <Link href='/#features' className='hover:text-foreground transition-colors duration-300'>
                    Funcionalidades
                  </Link>
                  <Link href='/#benefits' className='hover:text-foreground transition-colors duration-300'>
                    Beneficios
                  </Link>
                  <Link href='/#testimonials' className='hover:text-foreground transition-colors duration-300'>
                    Testimonios
                  </Link>
                  <Link href='/#pricing' className='hover:text-foreground transition-colors duration-300'>
                    Precios
                  </Link>
                  <Link href='/blog' className='hover:text-foreground transition-colors duration-300'>
                    Blog
                  </Link>
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <h3 className='text-foreground text-lg font-semibold'>Help</h3>
                <div className='flex flex-col gap-3'>
                  {/* <Link href='#' className='hover:text-foreground transition-colors duration-300'>
                    Customer Support
                  </Link> */}
                  <Link href='#' className='hover:text-foreground transition-colors duration-300'>
                    Términos y Condiciones
                  </Link>
                  <Link href='#' className='hover:text-foreground transition-colors duration-300'>
                    Política de Privacidad
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between gap-3'>
            <span className='font-light'>
              © {new Date().getFullYear()}{' '}
              <Link href='/#home' className='hover:text-foreground transition-colors duration-300'>
                ClassTrack
              </Link>
              , Made with ❤️ for a better education.
            </span>
            <div className='flex items-center gap-4'>
              <Link href='#' className='hover:text-foreground transition-colors duration-300' aria-label='Instagram'>
                <InstagramIcon className='size-5' />
              </Link>
              <Link href='#' className='hover:text-foreground transition-colors duration-300' aria-label='Email'>
                <MailIcon className='size-5' />
              </Link>
              <Link href='#' className='hover:text-foreground transition-colors duration-300' aria-label='Twitch'>
                <TwitchIcon className='size-5' />
              </Link>
              <Link href='#' className='hover:text-foreground transition-colors duration-300' aria-label='YouTube'>
                <YoutubeIcon className='size-5' />
              </Link>
            </div>
          </div>
        </div>
        <div className='-mb-10 pt-10 sm:px-16 md:-mb-22 lg:px-24'>{/* <HoverText text='ClassTrack' /> */}</div>
      </div>
    </footer>
  )
}

export default Footer
