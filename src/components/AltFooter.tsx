import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { CheckCircle } from 'lucide-react'

// Constants - simplified for auth/legal pages
const LEGAL_LINKS = [
  { name: 'Privacy Policy', to: '/privacy' },
  { name: 'Terms of Use', to: '/terms' },
  { name: 'Cookie Policy', to: '/cookies' },
  { name: 'Data Processing', to: '/data-processing' }
]

const CONTACT_LINKS = [
  { name: 'Help Center', to: '/help' },
  { name: 'Contact Us', to: '/contact' }
]

export default function AltFooter() {
  return (
    <footer className="relative bg-white py-6 overflow-hidden border-t border-gray-100">
      {/* Subtle background effect - more Alt than main footer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 to-indigo-100/20"
          style={{
            filter: 'blur(70px)',
            transform: 'rotate(-10deg) scale(1.2)'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and system status */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <motion.div
              className="flex items-center mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-md mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 font-bold text-lg">
                Hashcode
              </span>
            </motion.div>
          </div>

          {/* Links - simplified for auth/legal pages */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
            <span className="hidden md:inline text-gray-300">|</span>
            {CONTACT_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Hashcode Inc.
          </div>
        </div>
      </div>
    </footer>
  )
}
