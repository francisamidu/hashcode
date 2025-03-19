'use client'

import { motion } from 'motion/react'
import { CheckCircle } from 'lucide-react'
import {
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  GitHubIcon
} from './SocialIcons'
import { Link } from '@tanstack/react-router'

const PRODUCT_LINKS = [
  { name: 'Hash API', to: '/' },
  { name: 'Plugin SDK', to: '/' },
  { name: 'Pricing', to: '/' }
]

const DEVELOPER_LINKS = [
  { name: 'Developer Portal', to: '/' },
  { name: 'Documentation', to: '/' },
  { name: 'API Reference', to: '/' },
  { name: 'Sample Apps', to: '/' },
  { name: 'Guides', to: '/' }
]

const COMPANY_LINKS = [
  { name: 'Blog', to: '/' },
  { name: 'Careers', to: '/', badge: "We're hiring" },
  { name: 'Community', to: '/' },
  { name: 'Contact Us', to: '/' },
  { name: 'FAQs', to: '/' }
]

const SOCIAL_LINKS = [
  { icon: <TwitterIcon />, to: '/', label: 'Twitter' },
  { icon: <FacebookIcon />, to: '/', label: 'Facebook' },
  { icon: <LinkedInIcon />, to: '/', label: 'LinkedIn' },
  { icon: <GitHubIcon />, to: '/', label: 'GitHub' }
]

const LEGAL_LINKS = [
  { name: 'Terms of service', to: '/' },
  { name: 'Privacy policy', to: '/' },
  { name: 'Terms of Use', to: '/' }
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-16 pb-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-indigo-100/30 opacity-50"
          style={{
            filter: 'blur(100px)',
            transform: 'rotate(-15deg) scale(1.5)'
          }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-100/50 rounded-full"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 font-bold text-xl">
                Hashcode
              </span>
            </motion.div>

            <motion.p
              className="text-gray-600 mb-6 max-w-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform M-Pesa MSISDN hashes into clear numbers, empowering
              businesses with transparent payment records.
            </motion.p>

            <motion.div
              className="flex items-center space-x-2 bg-gray-100 rounded-full py-2 px-4 w-fit"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">
                All systems operational
              </span>
            </motion.div>
          </div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-gray-900 font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-gray-900 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Developers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-gray-900 font-medium mb-4">Developers</h3>
            <ul className="space-y-3">
              {DEVELOPER_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social & Legal */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            {SOCIAL_LINKS.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-gray-500 hover:text-indigo-600 transition-colors group"
                aria-label="Twitter"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hashcode Inc.
          </div>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(147, 51, 234, 0.04) 25%, rgba(147, 51, 234, 0.04) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.04) 75%, rgba(147, 51, 234, 0.04) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(147, 51, 234, 0.04) 25%, rgba(147, 51, 234, 0.04) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.04) 75%, rgba(147, 51, 234, 0.04) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}
      />
    </footer>
  )
}
