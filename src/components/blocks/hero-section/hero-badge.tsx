'use client'

import { motion } from 'motion/react'

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className='border-primary/15 bg-background/80 text-foreground flex items-center gap-4 rounded-full border px-5 py-3 text-sm shadow-sm backdrop-blur-sm sm:px-7 sm:text-base'
    >
      <span className='bg-primary size-3 rounded-full' />
      <span className='text-balance'>
        Web, matrículas, pagos y comunicación en una sola plataforma
      </span>
    </motion.div>
  )
}

export default HeroBadge
