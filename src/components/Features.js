import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'motion/react';
import Highlight from './Highlight';
import { RefreshCw, Search, Lock } from 'lucide-react'; // Importing icons from lucide-react
import SectionHeading from './SectionHeading';
const features = [
    {
        title: 'Seamless Hash Conversion',
        description: 'Effortlessly transform M-Pesa MSISDN hashes into clear, actionable phone numbers with our robust API.',
        icon: _jsx(RefreshCw, { className: "h-6 w-6 text-indigo-700" }) // Using lucide-react icon
    },
    {
        title: 'Enhanced Payment Transparency',
        description: 'Empower your business with transparent payment records, ensuring clarity and accuracy in every transaction.',
        icon: _jsx(Search, { className: "h-6 w-6 text-indigo-700" }) // Using lucide-react icon
    },
    {
        title: 'Secure Data Handling',
        description: 'Benefit from bank-level encryption and secure data processing, ensuring your sensitive information is protected.',
        icon: _jsx(Lock, { className: "h-6 w-6 text-indigo-700" }) // Using lucide-react icon
    }
];
const Features = () => {
    return (_jsx("section", { className: "py-12 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx(Highlight, { text: "Features" }), _jsx(SectionHeading, { textNormal: "Everything you need to", textStripped: "unlock payment clarity" }), _jsx("p", { className: "mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto", children: "Our API provides all the tools you need to transform hashes into clear numbers, enhancing your business's financial transparency." })] }), _jsx("div", { className: "mt-10", children: _jsx("div", { className: "grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8", children: features.map((feature, index) => (_jsxs(motion.div, { className: "bg-white shadow-lg rounded-lg p-6", whileHover: { scale: 1.05 }, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.1 }, children: [_jsx("div", { className: "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 ", children: feature.icon }), _jsx("h3", { className: "mt-4 text-lg leading-6 font-bold text-gray-900", children: feature.title }), _jsx("p", { className: "mt-2 text-base text-gray-500", children: feature.description }), _jsx("a", { href: "#", className: "mt-3 text-indigo-600 hover:text-indigo-500 inline-flex items-center", children: "Learn more \u2192" })] }, index))) }) })] }) }));
};
export default Features;
