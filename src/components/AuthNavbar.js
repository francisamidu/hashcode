import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from '@tanstack/react-router';
import Logo from './Logo';
export default function AuthNavbar() {
    const location = useLocation();
    const isSignup = location.pathname.includes('signup');
    return (_jsx("header", { className: "sticky top-0 z-50 border-b border-gray-100 bg-white/80 py-4 backdrop-blur-sm", children: _jsxs("div", { className: "container mx-auto flex items-center justify-between px-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Link, { to: "/", className: "mr-8", children: _jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Logo, {}) }) }), _jsxs("nav", { className: "hidden space-x-1 md:flex", children: [_jsx(NavItem, { text: "Products", hasDropdown: true }), _jsx(NavItem, { text: "Use cases", hasDropdown: true }), _jsx(NavItem, { text: "Docs", hasDropdown: true }), _jsx(NavItem, { text: "Pricing" }), _jsx(NavItem, { text: "About us", hasDropdown: true })] })] }), _jsx("div", { className: "flex items-center space-x-2", children: isSignup ? (_jsx(Link, { to: "/auth/login", className: "text-sm font-medium text-gray-700 hover:text-gray-900", children: "Log in" })) : (_jsx(Link, { to: "/auth/signup", className: "text-sm font-medium text-gray-700 hover:text-gray-900", children: "Signup" })) })] }) }));
}
function NavItem({ text, hasDropdown = false }) {
    return (_jsx(motion.div, { className: "relative inline-block", whileHover: { y: -1 }, children: _jsxs("button", { className: "flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900", children: [text, hasDropdown && _jsx(ChevronDown, { className: "ml-1 h-4 w-4" })] }) }));
}
