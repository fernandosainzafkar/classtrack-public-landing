'use client'

import { useState, type ReactNode, type MouseEvent } from 'react'

import { PopupModal } from 'react-calendly'

type CalendlyButtonProps = {
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const CalendlyButton = ({ children, className, onClick }: CalendlyButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (onClick) onClick(e)
    setIsOpen(true)
  }

  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
      {isOpen && typeof document !== 'undefined' && (
        <PopupModal
          url='https://calendly.com/classtrack-info/30min'
          rootElement={document.body}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
