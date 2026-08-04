'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { CalendlyButton } from '@/components/ui/calendly-button'

import type { Navigation } from '@/components/blocks/header-navigation'

import { HeaderNavigation, HeaderNavigationSmallScreen } from '@/components/blocks/header-navigation'

import { cn } from '@/lib/utils'

import Logo from '@/components/logo'

const loginUrl = 'https://admin.classtrack.academy'
const signupUrl = 'https://admin.classtrack.academy/signup'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!mounted) {
    return (
      <header
        className={cn('sticky top-0 z-50 flex h-20 w-full items-end justify-center px-4 sm:px-6 lg:px-8', className)}
      >
        <div className='border-background h-14 w-full max-w-[90rem] rounded-full border bg-white/90 px-4 dark:bg-black/90' />
      </header>
    )
  }

  return (
    <header
      className={cn('sticky top-0 z-50 flex h-20 w-full items-end justify-center px-4 sm:px-6 lg:px-8', className)}
    >
      <div
        className={cn(
          'border-background relative flex h-14 w-full max-w-[90rem] items-center justify-between gap-4 rounded-full border px-4 transition-all duration-700 before:absolute before:inset-0 before:-z-1 before:rounded-full before:bg-linear-to-b before:from-white/50 before:to-white before:backdrop-blur-[6px] dark:before:from-black/50 dark:before:to-black',
          { 'max-w-7xl': isScrolled, 'sm:px-6 lg:px-8': !isScrolled }
        )}
      >
        {/* Logo */}
        <Link href='/#home'>
          <Logo className='gap-2 [&_img]:size-8 [&_span]:text-xl max-sm:[&_img]:size-7 max-sm:[&_span]:text-lg' />
        </Link>

        {/* Navigation */}
        <HeaderNavigation navigationData={navigationData} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex items-center gap-3'>
          {/* Get started Button */}
          <Link
            href={loginUrl}
            className='border-border bg-background text-foreground hover:bg-accent hidden items-center justify-center rounded-lg border px-5 py-2 text-sm font-medium transition-colors lg:inline-flex'
          >
            Iniciar sesión
          </Link>

          

          <CalendlyButton className='border-border bg-background text-foreground hover:bg-accent hidden items-center justify-center rounded-lg border px-5 py-2 text-sm font-medium transition-colors lg:inline-flex'>
            Reservar demo
          </CalendlyButton>

          <Link
            href={signupUrl}
            className='bg-primary text-primary-foreground hover:bg-primary/90 hidden items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-colors lg:inline-flex'
          >
            Prueba gratis
          </Link>

          {/* Navigation for small screens */}
          <div className='flex gap-3 lg:hidden'>
            <CalendlyButton className='bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90 max-sm:hidden'>
              Solicitar demo
            </CalendlyButton>

            <HeaderNavigationSmallScreen navigationData={navigationData} />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header
