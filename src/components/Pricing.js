'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Database, Server, Clock, Users, Building2, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Highlight from './Highlight';
import { Button } from './ui/button';
import SectionHeading from './SectionHeading';
export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false);
    const pricingTiers = useMemo(() => [
        {
            name: 'Starter',
            price: 'Free',
            period: 'Forever',
            description: 'Perfect for testing and small businesses',
            features: [
                {
                    text: '100 hash conversions/month',
                    icon: _jsx(Smartphone, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Basic API access',
                    icon: _jsx(Zap, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Community support',
                    icon: _jsx(Users, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Standard response time',
                    icon: _jsx(Clock, { className: "h-4 w-4 text-indigo-500" })
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
                    icon: _jsx(Smartphone, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Full API access',
                    icon: _jsx(Zap, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Priority support',
                    icon: _jsx(Users, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Faster response time',
                    icon: _jsx(Clock, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Batch processing',
                    icon: _jsx(Database, { className: "h-4 w-4 text-indigo-500" })
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
                    icon: _jsx(Smartphone, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Dedicated support',
                    icon: _jsx(Users, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'SLA guarantees',
                    icon: _jsx(Shield, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'Custom integration',
                    icon: _jsx(Server, { className: "h-4 w-4 text-indigo-500" })
                },
                {
                    text: 'On-premise option',
                    icon: _jsx(Building2, { className: "h-4 w-4 text-indigo-500" })
                }
            ],
            cta: {
                text: 'Contact sales',
                action: () => console.log('Contact sales')
            }
        }
    ], []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };
    useEffect(() => {
        console.log(isAnnual);
    }, [isAnnual]);
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-white to-indigo-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { className: "text-center max-w-3xl mx-auto mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: [_jsx(Highlight, { text: "Pricing" }), _jsx(SectionHeading, { textNormal: "Simple,", textStripped: "transparent pricing" }), _jsx("p", { className: "text-gray-600 text-lg my-8", children: "No hidden fees or long-term commitments. Start for free and scale as you grow." }), _jsxs("div", { className: "flex items-center justify-center mb-8", children: [_jsx("span", { className: cn('mr-3', !isAnnual && 'text-gray-900 font-medium'), children: "Monthly" }), _jsxs("button", { onClick: () => setIsAnnual(!isAnnual), className: `hover:cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 ${isAnnual && 'bg-indigo-600'}`, children: [_jsx("span", { className: "sr-only", children: "Toggle annual billing" }), _jsx("span", { className: cn('inline-block h-4 w-4 transform rounded-full bg-white transition', isAnnual ? 'translate-x-6' : 'translate-x-1') })] }), _jsxs("span", { className: cn('ml-3', isAnnual && 'text-gray-900 font-medium'), children: ["Annual", ' ', _jsx("span", { className: "text-indigo-500 text-sm font-medium", children: "(Save 17%)" })] })] })] }), _jsx(motion.div, { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: pricingTiers.map((tier, _index) => {
                        return (_jsxs(motion.div, { className: cn('bg-white rounded-2xl overflow-hidden shadow-lg border transition-all duration-300', tier.popular
                                ? 'border-indigo-400 relative md:scale-105 md:-translate-y-2'
                                : 'border-gray-100 hover:border-indigo-200 hover:-translate-y-1'), variants: itemVariants, whileHover: { y: -5 }, children: [tier.popular && (_jsx("div", { className: "absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg", children: "Most Popular" })), _jsxs("div", { className: "p-8", children: [_jsx("h3", { className: "text-xl font-bold mb-2 text-gray-900", children: tier.name }), _jsxs("div", { className: "flex justify-between items-baseline mb-6", children: [_jsx("span", { className: "text-4xl font-bold text-gray-900", children: tier.name == 'Pro'
                                                        ? isAnnual
                                                            ? 'KES 490'
                                                            : 'KES 49'
                                                        : tier.price }), tier.period && (_jsx("span", { className: "ml-2 text-gray-500 text-sm", children: tier.name == 'Pro'
                                                        ? isAnnual
                                                            ? 'billed annually'
                                                            : 'per month'
                                                        : tier.price }))] }), _jsx("p", { className: "text-gray-600 mb-6 min-h-[50px]", children: tier.description }), _jsx("ul", { className: "space-y-6 mb-8 min-h-[240px]", children: tier.features.map((feature, i) => (_jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "mr-2 mt-1", children: feature.icon }), _jsx("span", { className: "text-gray-700", children: feature.text })] }, i))) }), _jsx(Button, { onClick: tier.cta.action, className: cn('h-12 w-full py-3 rounded-lg font-medium transition-colors !block', tier?.popular
                                                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                                : 'bg-slate-200 text-gray-800 hover:bg-gray-400'), children: tier.cta.text })] })] }, tier.name));
                    }) }), _jsx(motion.div, { className: "mt-16 text-center max-w-3xl mx-auto", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.3 }, children: _jsxs("p", { className: "text-gray-600", children: ["All plans include secure API access, 99.9% uptime guarantee, and GDPR compliance.", _jsx("br", {}), "Only successful hash conversions are charged."] }) })] }) }));
}
