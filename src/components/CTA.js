import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
export default function CTASection() {
    return (_jsxs("section", { className: "bg-gradient-to-b from-white to-indigo-50 py-20 relative overflow-hidden", id: "CTA", children: [_jsx("div", { className: "container mx-auto px-4 relative z-10", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto text-center", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.5 }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600", children: "Your M-Pesa Hash" }), ' ', _jsx("span", { className: "bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent", children: "Conversion Solution" }), ' ', _jsx("span", { className: "text-gray-900", children: "Is Ready" })] }), _jsx("p", { className: "text-gray-700 text-xl mb-10 max-w-3xl mx-auto", children: "Stop struggling with unidentified payments, missing customer data, and reconciliation issues... let HashCode transform your M-Pesa hashes for you." }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4", children: [_jsx(motion.div, { className: "pb-0", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsxs(Link, { to: "/", className: "inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md", children: ["Get started today ", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) }), _jsx(motion.div, { className: "pb-0", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Link, { to: "/", className: "inline-flex items-center px-6 py-2 bg-white border border-indigo-200 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors", children: "View API docs" }) })] }), _jsx("div", { className: "mt-12 flex justify-center", children: _jsx("div", { className: "grid grid-cols-3 gap-8 md:gap-16", children: [
                                    { number: '99.9%', label: 'Conversion Accuracy' },
                                    { number: '500+', label: 'Happy Businesses' },
                                    { number: '10M+', label: 'Hashes Converted' }
                                ].map((stat, index) => (_jsxs(motion.div, { className: "text-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.2 + index * 0.1 }, children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold text-gray-900", children: stat.number }), _jsx("div", { className: "text-sm text-gray-600", children: stat.label })] }, index))) }) })] }) }), _jsxs("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none", "aria-hidden": "true", children: [_jsx("div", { className: "absolute top-20 right-[10%] w-64 h-64 rounded-full bg-indigo-200 opacity-30 blur-3xl" }), _jsx("div", { className: "absolute bottom-20 left-[10%] w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-3xl" }), _jsx("div", { className: "absolute top-10 left-10 w-20 h-20 border-2 border-indigo-200 rounded-lg opacity-20" }), _jsx("div", { className: "absolute bottom-10 right-10 w-20 h-20 border-2 border-indigo-200 rounded-full opacity-20" }), _jsx("div", { className: "absolute top-1/2 left-1/4 w-8 h-8 bg-indigo-200 rounded-full opacity-20" }), _jsx("div", { className: "absolute top-1/3 right-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-20" })] })] }));
}
