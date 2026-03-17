import Image from 'next/image'

const LogoVector = ({ className }: { className?: string }) => {
  return (
    <Image 
      src='/images/logo.png' 
      alt='Logo Vector' 
      width={24} 
      height={24} 
      className={className} 
    />
  )
}

export default LogoVector
