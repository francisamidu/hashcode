import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
const CustomScroll = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("div", { className: "h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300", children: [children, _jsx(motion.div, { className: "fixed right-4 top-1/2 h-24 w-2 rounded-full bg-blue-500", initial: { opacity: 0 }, animate: { opacity: scrollY > 50 ? 1 : 0 }, transition: { duration: 0.3 } })] }));
};
export default CustomScroll;
