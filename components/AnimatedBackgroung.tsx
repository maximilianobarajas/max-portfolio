'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" /> {/* Asegura fondo oscuro base */}
      {/* Blob 1: Morado (Arriba Izquierda) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[100px]"
      />
      {/* Blob 2: Cian (Abajo Derecha) */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]"
      />
      {/* Blob 3: Azul Profundo (Centro móvil) */}
      <motion.div
        animate={{
          x: [-100, 100],
          y: [-50, 50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-0 left-1/3 h-[500px] w-[700px] rounded-full bg-blue-800/20 blur-[120px]"
      />
    </div>
  )
}
