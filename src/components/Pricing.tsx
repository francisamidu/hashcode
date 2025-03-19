'use client'

import type React from 'react'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import {
  Zap,
  Shield,
  Database,
  Server,
  Clock,
  Users,
  Building2,
  Smartphone
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Highlight from './Highlight'
import { Button } from './ui/button'
import SectionHeading from './SectionHeading'

type PricingTier = {
  name: string
  price: string
  period: string
  description: string
  features: {
    text: string
    icon: React.ReactNode
  }[]
  cta: {
    text: string
    action: () => void
  }
  popular?: boolean
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingTiers: PricingTier[] = useMemo(
    () => [
      {
        name: 'Starter',
        price: 'Free',
        period: 'Forever',
        description: 'Perfect for testing and small businesses',
        features: [
          {
            text: '100 hash conversions/month',
            icon: <Smartphone className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Basic API access',
            icon: <Zap className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Community support',
            icon: <Users className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Standard response time',
            icon: <Clock className="h-4 w-4 text-indigo-500" />
          }
        ],
        cta: {
          text: 'Start for free',
          action: () => console.log('Start free plan')
        }
      },
      {
        name: 'Pro',
        price: 'KES 49',
        period: 'per month',
        description: 'For growing businesses with regular needs',
        features: [
          {
            text: '10,000 hash conversions/month',
            icon: <Smartphone className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Full API access',
            icon: <Zap className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Priority support',
            icon: <Users className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Faster response time',
            icon: <Clock className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Batch processing',
            icon: <Database className="h-4 w-4 text-indigo-500" />
          }
        ],
        cta: {
          text: 'Try for free',
          action: () => console.log('Start pro plan')
        },
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with high volume',
        features: [
          {
            text: 'Unlimited hash conversions',
            icon: <Smartphone className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Dedicated support',
            icon: <Users className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'SLA guarantees',
            icon: <Shield className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'Custom integration',
            icon: <Server className="h-4 w-4 text-indigo-500" />
          },
          {
            text: 'On-premise option',
            icon: <Building2 className="h-4 w-4 text-indigo-500" />
          }
        ],
        cta: {
          text: 'Contact sales',
          action: () => console.log('Contact sales')
        }
      }
    ],
    []
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    console.log(isAnnual)
  }, [isAnnual])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Highlight text="Pricing" />
          <SectionHeading
            textNormal="Simple,"
            textStripped="transparent pricing"
          />
          <p className="text-gray-600 text-lg my-8">
            No hidden fees or long-term commitments. Start for free and scale as
            you grow.
          </p>

          <div className="flex items-center justify-center mb-8">
            <span
              className={cn('mr-3', !isAnnual && 'text-gray-900 font-medium')}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`hover:cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 ${isAnnual && 'bg-indigo-600'}`}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={cn(
                  'inline-block h-4 w-4 transform rounded-full bg-white transition',
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                )}
              />
            </button>
            <span
              className={cn('ml-3', isAnnual && 'text-gray-900 font-medium')}
            >
              Annual{' '}
              <span className="text-indigo-500 text-sm font-medium">
                (Save 17%)
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, _index) => {
            return (
              <motion.div
                key={tier.name}
                className={cn(
                  'bg-white rounded-2xl overflow-hidden shadow-lg border transition-all duration-300',
                  tier.popular
                    ? 'border-indigo-400 relative md:scale-105 md:-translate-y-2'
                    : 'border-gray-100 hover:border-indigo-200 hover:-translate-y-1'
                )}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {tier.name}
                  </h3>
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.name == 'Pro'
                        ? isAnnual
                          ? 'KES 490'
                          : 'KES 49'
                        : tier.price}
                    </span>
                    {tier.period && (
                      <span className="ml-2 text-gray-500 text-sm">
                        {tier.name == 'Pro'
                          ? isAnnual
                            ? 'billed annually'
                            : 'per month'
                          : tier.price}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6 min-h-[50px]">
                    {tier.description}
                  </p>
                  <ul className="space-y-6 mb-8 min-h-[240px]">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1">{feature.icon}</span>
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={tier.cta.action}
                    className={cn(
                      'h-12 w-full py-3 rounded-lg font-medium transition-colors !block',
                      tier?.popular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-slate-200 text-gray-800 hover:bg-gray-400'
                    )}
                  >
                    {tier.cta.text}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600">
            All plans include secure API access, 99.9% uptime guarantee, and
            GDPR compliance.
            <br />
            Only successful hash conversions are charged.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
