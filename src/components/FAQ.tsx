'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, HelpCircle, MailIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Highlight from './Highlight'
import SectionHeading from './SectionHeading'
import { useAppState } from '@/state/app'

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const appName = useAppState((state) => state.appName)

  const faqItems: FAQItem[] = [
    {
      question: `What is ${appName} and how does it work?`,
      answer: `${appName} is a specialized API service that transforms M-Pesa MSISDN (Mobile Subscriber Integrated Services Digital Network Number) hashes back into their original phone numbers. When businesses receive payment notifications from M-Pesa, the customer phone numbers are often hashed for privacy. Our service allows you to securely convert these hashes back to the original numbers, enabling you to identify customers, send payment confirmations, and maintain accurate transaction records.`
    },
    {
      question: `Is ${appName} secure and compliant with privacy regulations?`,
      answer: `Yes, ${appName} is built with security and compliance as top priorities. We use bank-level encryption for all data in transit and at rest. Our service is compliant with relevant data protection regulations, including GDPR and local privacy laws. We only process the data necessary for the hash conversion and do not store phone numbers or transaction details beyond the processing period required for the service to function.`
    },
    {
      question: `How accurate is the hash to phone number conversion?`,
      answer: `${appName} provides highly accurate conversions with a success rate of over 99.9%. Our proprietary algorithms and extensive database ensure that virtually all valid M-Pesa transaction hashes can be successfully converted back to their original phone numbers. In the rare case where a conversion fails, our system provides clear error messages to help troubleshoot the issue.`
    },
    {
      question: `How can I integrate ${appName} with my existing systems?`,
      answer: `${appName} offers a simple REST API that can be integrated with virtually any system or platform. We provide comprehensive documentation, SDKs for popular programming languages (PHP, Python, JavaScript, Java), and pre-built plugins for common e-commerce platforms. Our team is also available to assist with custom integrations for more complex systems or specific requirements.`
    },
    {
      question: `What volume of hash conversions can ${appName} handle?`,
      answer: `${appName} is built on a scalable cloud infrastructure that can handle millions of conversions per day. Whether you're a small business processing a few hundred transactions monthly or a large enterprise with thousands of daily transactions, our system automatically scales to meet your needs. For extremely high-volume requirements, our Enterprise plan includes dedicated resources and custom optimizations.`
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center">
            <Highlight
              icon={<HelpCircle className="h-4 w-4 mr-2 text-indigo-700" />}
              text="Frequently Asked Questions"
            />
          </div>
          <SectionHeading
            textNormal="Frequently Asked Questions About"
            textStripped="M-Pesa Hash Conversion"
          />

          <p className="text-gray-600 text-center text-lg max-w-3xl mt-3">
            Got questions about how our hash conversion service works or how it
            can help your business? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-1 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                className={cn(
                  'bg-gray-100 w-full px-6 py-5 flex justify-between items-center text-left transition-colors hover:bg-gray-50'
                )}
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-gray-600 transition-transform duration-300',
                    openIndex === index ? 'transform rotate-180' : ''
                  )}
                />
              </Button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-white border-t border-gray-100 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <Button className="inline-flex items-center px-6 py-3 main-button text-white font-medium rounded-lg transition-colors">
            <MailIcon />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
