import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function CTASection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-indigo-50 py-20 relative overflow-hidden"
      id="CTA"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
              Your M-Pesa Hash
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Conversion Solution
            </span>{' '}
            <span className="text-gray-900">Is Ready</span>
          </h2>

          <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
            Stop struggling with unidentified payments, missing customer data,
            and reconciliation issues... let HashCode transform your M-Pesa
            hashes for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div
              className="pb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                Get started today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              className="pb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center px-6 py-2 bg-white border border-indigo-200 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View API docs
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {[
                { number: '99.9%', label: 'Conversion Accuracy' },
                { number: '500+', label: 'Happy Businesses' },
                { number: '10M+', label: 'Hashes Converted' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-indigo-200 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>

        {/* Decorative Patterns */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-indigo-200 rounded-lg opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-indigo-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-indigo-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-20"></div>
      </div>
    </section>
  )
}
