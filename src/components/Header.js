import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Link } from '@tanstack/react-router';
import Logo from './Logo';
const Header = () => {
    const [darkMode, toggleDarkMode] = useState(false);
    return (_jsx("header", { children: _jsx("nav", { className: "container mx-auto p-3", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Link, { to: "/", className: "flex items-center", children: _jsx(Logo, {}) }), _jsxs("div", { className: "hidden md:flex ml-10 space-x-8", children: [_jsx(Link, { to: "/features", className: "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors", children: "Features" }), _jsx(Link, { to: "/documentation", className: "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors", children: "Documentation" }), _jsx(Link, { to: "/developers", className: "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors", children: "Developers" })] })] }), _jsxs("div", { className: "flex justify-between flex-row items-center", children: [_jsx(Button, { className: "block w-fit hover:bg-transparent mr-1", onClick: () => toggleDarkMode(!darkMode), variant: "ghost", children: darkMode ? (_jsx(Sun, { className: "h-5 w-5" })) : (_jsx(Moon, { className: "h-5 w-5" })) }), _jsx(Button, { className: "main-button", variant: "default", children: "Try it for free" })] })] }) }) }));
};
export default Header;
