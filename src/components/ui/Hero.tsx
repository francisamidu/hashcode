import React from 'react'
import { motion } from 'motion/react'
import { fadeInUp } from '@/shared/transitions'
import dashboard from '@/assets/dashboard.jpeg'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0 flex md:block flex-col md:flex-row justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6 md:self-start self-center">
            Launching Soon
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight md:text-left text-center">
            <span className="text-gray-800 dark:text-white">
              Painless M-Pesa
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              HASH DECODING
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-xl mb-8 leading-relaxed md:text-left text-center">
            Easily convert M-Pesa MSISDN hashes into clear phone numbers,
            enhancing your business with transparent payment records.
          </p>
          <div className="flex flex-col md:items-start items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              className="main-button text-white px-16 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center w-36 justify-center flex"
            >
              Get Started
              <ArrowRight className="mr-1" size={18} />
            </Button>
            <Button
              variant="outline"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center w-fit"
            >
              View Demo
            </Button>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"
                ></div>
              ))}
            </div>
            <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">
                500+
              </span>{' '}
              developers trust hashcode
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <img
                src={dashboard}
                alt="Dashboard Preview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
