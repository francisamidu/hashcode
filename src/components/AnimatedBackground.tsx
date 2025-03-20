import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-100"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0.1 + Math.random() * 0.3,
            scale: 0.5 + Math.random() * 1.5
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: [
              0.1 + Math.random() * 0.3,
              0.2 + Math.random() * 0.3,
              0.1 + Math.random() * 0.3
            ]
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear'
          }}
          style={{
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`
          }}
        />
      ))}
      <motion.div
        className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-50 opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-purple-50 opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-indigo-50 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}
