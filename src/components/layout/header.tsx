'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import type { Navigation } from '@/components/blocks/header-navigation'

import { HeaderNavigation, HeaderNavigationSmallScreen } from '@/components/blocks/header-navigation'

import { cn } from '@/lib/utils'

import Logo from '@/components/logo'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn('sticky top-0 z-50 flex h-20 w-full items-end justify-center px-4 sm:px-6 lg:px-8', className)}
    >
      <div
        className={cn(
          'border-background relative flex h-14 w-full max-w-7xl items-center justify-between gap-4 rounded-full border px-4 transition-all duration-700 before:absolute before:inset-0 before:-z-1 before:rounded-full before:bg-linear-to-b before:from-white/50 before:to-white before:backdrop-blur-[6px] dark:before:from-black/50 dark:before:to-black',
          { 'max-w-5xl': isScrolled, 'sm:px-6 lg:px-8': !isScrolled }
        )}
      >
        {/* Logo */}
        <Link href='/#home'>
          <Logo className='max-sm:[&_span]:text-xl' />
        </Link>

        {/* Navigation */}
        <HeaderNavigation navigationData={navigationData} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex items-center gap-3'>
          {/* Get started Button */}
          <Link
            href='#'
            className='bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90 max-lg:hidden'
          >
            Solicitar demo
          </Link>

          {/* Navigation for small screens */}
          <div className='flex gap-3 lg:hidden'>
            <Link
              href='#'
              className='bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90 max-sm:hidden'
            >
              Solicitar demo
            </Link>

            <HeaderNavigationSmallScreen navigationData={navigationData} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
