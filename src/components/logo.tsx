import Image from 'next/image'

// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image src='/images/logo_blue.png' alt='Logo' width={36} height={36} className='size-9 shrink-0 object-contain' />
      <span className='text-2xl font-semibold'>ClassTrack</span>
    </div>
  )
}

export default Logo
