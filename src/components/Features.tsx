// src/components/Features.tsx

import React from 'react'
import { motion } from 'motion/react'
import Highlight from './Highlight'
import { RefreshCw, Search, Lock } from 'lucide-react' // Importing icons from lucide-react

const features = [
  {
    title: 'Seamless Hash Conversion',
    description:
      'Effortlessly transform M-Pesa MSISDN hashes into clear, actionable phone numbers with our robust API.',
    icon: <RefreshCw className="h-6 w-6 text-indigo-700" /> // Using lucide-react icon
  },
  {
    title: 'Enhanced Payment Transparency',
    description:
      'Empower your business with transparent payment records, ensuring clarity and accuracy in every transaction.',
    icon: <Search className="h-6 w-6 text-indigo-700" /> // Using lucide-react icon
  },
  {
    title: 'Secure Data Handling',
    description:
      'Benefit from bank-level encryption and secure data processing, ensuring your sensitive information is protected.',
    icon: <Lock className="h-6 w-6 text-indigo-700" /> // Using lucide-react icon
  }
]

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Highlight text="Features" />
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600">
              unlock payment clarity
            </span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our API provides all the tools you need to transform hashes into
            clear numbers, enhancing your business's financial transparency.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 ">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg leading-6 font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="mt-3 text-indigo-600 hover:text-indigo-500 inline-flex items-center"
                >
                  Learn more &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
