'use client'

import { motion } from 'motion/react'

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className='border-primary/15 bg-background/80 text-foreground flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] shadow-sm backdrop-blur-sm sm:gap-3 sm:px-5 sm:py-2 sm:text-sm lg:px-6 lg:py-2.5'
    >
      <span className='bg-primary size-2.5 rounded-full' />
      <span className='text-balance'>
        Web, matrículas y pagos en una sola plataforma
      </span>
    </motion.div>
  )
}

export default HeroBadge
