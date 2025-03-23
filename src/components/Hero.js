import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'motion/react';
import { fadeInUp } from '@/shared/transitions';
import dashboard from '@/assets/dashboard.jpeg';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Highlight from './Highlight';
const Hero = () => {
    return (_jsx("section", { className: "container mx-auto px-6 py-16 md:py-24", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [_jsxs(motion.div, { className: "md:w-1/2 mb-12 md:mb-0 flex md:block flex-col md:flex-row justify-center", initial: "hidden", animate: "visible", variants: fadeInUp, children: [_jsx(Highlight, { text: "Launching soon" }), _jsxs("h1", { className: "text-5xl md:text-6xl font-bold mb-6 leading-tight md:text-left text-center", children: [_jsx("span", { className: "text-gray-800 dark:text-white", children: "Painless M-Pesa" }), _jsx("br", {}), _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600", children: "HASH DECODING" })] }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 text-xl mb-8 leading-relaxed md:text-left text-center", children: "Easily convert M-Pesa MSISDN hashes into clear phone numbers, enhancing your business with transparent payment records." }), _jsxs("div", { className: "flex flex-col md:items-start items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4", children: [_jsxs(Button, { variant: "default", className: "main-button text-white px-16 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center w-36 justify-center flex", children: ["Get Started", _jsx(ArrowRight, { className: "mr-1", size: 18 })] }), _jsx(Button, { variant: "outline", className: "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center w-fit", children: "View Demo" })] }), _jsxs("div", { className: "mt-8 flex items-center", children: [_jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700" }, i))) }), _jsxs("p", { className: "ml-4 text-sm text-gray-600 dark:text-gray-400", children: [_jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: "500+" }), ' ', "developers trust hashcode"] })] })] }), _jsx(motion.div, { className: "md:w-1/2 md:pl-12", initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30" }), _jsx("div", { className: "relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden", children: _jsx("img", { src: dashboard, alt: "Dashboard Preview", width: 600, height: 400, className: "w-full h-auto" }) })] }) })] }) }));
};
export default Hero;
