import { TextReveal } from '../ui/text-reveal'

const QuoteSection = () => {
  return (
    <TextReveal>
      ClassTrack ha dado de alta a miles de clientes en decenas de centros
      <img src='/images/quote-image-1.webp' alt='avatar 1' className='h-9 rounded-full sm:h-10 lg:h-15 xl:h-18' />y
      seguimos creciendo
    </TextReveal>
  )
}

export default QuoteSection
