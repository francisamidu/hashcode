import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Hash } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import Logo from './Logo';
export default function NotFound(props) {
    console.log(props);
    const [randomHashes, setRandomHashes] = useState([]);
    const [decodedHash, setDecodedHash] = useState(null);
    // Generate random hash-like strings
    useEffect(() => {
        const generateRandomHash = () => {
            const chars = '0123456789abcdef';
            let hash = '';
            for (let i = 0; i < 32; i++) {
                hash += chars[Math.floor(Math.random() * chars.length)];
            }
            return hash;
        };
        const hashes = Array.from({ length: 15 }, () => generateRandomHash());
        setRandomHashes(hashes);
        // Simulate decoding animation
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * hashes.length);
            setDecodedHash(hashes[randomIndex]);
            setTimeout(() => {
                setDecodedHash(null);
            }, 1000);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col relative", children: [_jsx("div", { className: "fixed inset-0 overflow-hidden opacity-5 select-none pointer-events-none", children: _jsx("div", { className: "absolute inset-0 flex flex-wrap content-start", children: randomHashes.map((hash, index) => (_jsx("div", { className: `text-xs font-mono p-2 ${hash === decodedHash ? 'text-indigo-600 font-bold' : ''}`, style: {
                            transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
                            opacity: Math.random() * 0.8 + 0.2
                        }, children: hash }, index))) }) }), _jsx("header", { className: "w-full py-6 px-4 sm:px-6 lg:px-8 z-10", children: _jsx("div", { className: "flex items-center", children: _jsx(Logo, {}) }) }), _jsx("main", { className: "flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10", children: _jsxs("div", { className: "max-w-md w-full text-center", children: [_jsx("div", { className: "mx-auto w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mb-6", children: _jsx(Hash, { className: "h-12 w-12 text-indigo-600" }) }), _jsx("h1", { className: "text-6xl font-extrabold text-gray-900 tracking-tight mb-4", children: "404" }), _jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Hash Not Found" }), _jsxs("div", { className: "bg-white shadow-md rounded-lg p-6 mb-8", children: [_jsx("p", { className: "text-gray-600 mb-6", children: "We couldn't decode this hash. The page you're looking for doesn't exist or has been moved to another URL." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [_jsx(Button, { asChild: true, variant: "default", className: "gap-2", children: _jsxs(Link, { to: "/", children: [_jsx(Home, { className: "h-4 w-4" }), "Back to Home"] }) }), _jsx(Button, { asChild: true, variant: "outline", className: "gap-2", children: _jsxs(Link, { to: "/dashboard", children: [_jsx(ArrowLeft, { className: "h-4 w-4" }), "Go to Dashboard"] }) })] })] }), _jsxs("div", { className: "text-sm text-gray-500", children: ["Need help?", ' ', _jsx(Link, { to: "/dashboard/help", className: "text-indigo-600 hover:text-indigo-500", children: "Contact our support team" })] })] }) }), _jsxs("footer", { className: "w-full py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 z-10", children: ["\u00A9 ", new Date().getFullYear(), " Hashcode. All rights reserved."] })] }));
}
