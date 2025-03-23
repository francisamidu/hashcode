import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Home, BarChart3, Database, CreditCard, HelpCircle, Settings, LockOpen, FileText, Key } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, useLocation } from '@tanstack/react-router';
import Logo from '../Logo';
import UserCard from './UserCard';
const Sidebar = () => {
    const pathname = useLocation().pathname;
    const mainRoutes = [
        {
            active: pathname === '/dashboard',
            icon: _jsx(Home, { size: 18 }),
            to: '/dashboard',
            text: 'Home'
        },
        {
            active: pathname === '/dashboard/decode',
            icon: _jsx(LockOpen, { size: 18 }),
            to: '/dashboard/decode',
            text: 'Decode Hash',
            badge: '24'
        },
        {
            active: pathname === '/dashboard/analytics',
            icon: _jsx(BarChart3, { size: 18 }),
            to: '/dashboard/analytics',
            text: 'Analytics'
        },
        {
            active: pathname === '/dashboard/documentation',
            icon: _jsx(FileText, { size: 18 }),
            to: '/dashboard/documentation',
            text: 'Documentation'
        },
        {
            active: pathname === '/dashboard/api-keys',
            icon: _jsx(Key, { size: 18 }),
            to: '/dashboard/api-keys',
            text: 'API Keys'
        },
        {
            active: pathname === '/dashboard/api-usage',
            icon: _jsx(Database, { size: 18 }),
            to: '/dashboard/api-usage',
            text: 'API Usage'
        },
        {
            active: pathname === '/dashboard/billing',
            icon: _jsx(CreditCard, { size: 18 }),
            to: '/dashboard/billing',
            text: 'Billing'
        }
    ];
    const preferenceRoutes = [
        {
            active: pathname === '/dashboard/help',
            icon: _jsx(HelpCircle, { size: 18 }),
            to: '/dashboard/help',
            text: 'Help and Support'
        },
        {
            active: pathname === '/dashboard/settings',
            icon: _jsx(Settings, { size: 18 }),
            to: '/dashboard/settings',
            text: 'Settings'
        }
    ];
    return (_jsxs("aside", { className: "hidden w-64 flex-col border-r border-gray-200 bg-white p-4 md:flex fixed left-0 top-0", children: [_jsx("div", { className: "mb-2 flex items-center", children: _jsx(Link, { to: "..", children: _jsx(Logo, {}) }) }), _jsx("div", { className: "hover:cursor-pointer my-2", children: _jsx(UserCard, { username: "Francis", transactionCount: 10 }) }), _jsxs("div", { className: "space-y-6 flex-1", children: [_jsxs("div", { children: [_jsx("p", { className: "mb-2 text-xs font-semibold text-gray-500", children: "MAIN MENU" }), _jsx("nav", { className: "space-y-1", children: mainRoutes.map((route) => (_jsxs(Link, { to: route.to, className: `flex items-center rounded-md px-3 py-2 text-sm transition-all duration-150 ${route.active
                                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                                        : 'text-gray-700 hover:bg-gray-100'}`, children: [_jsx("span", { className: `mr-3 ${route.active ? 'text-indigo-700' : 'text-gray-500'}`, children: route.icon }), _jsx("span", { children: route.text }), route.badge && (_jsx("span", { className: "ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600", children: route.badge }))] }, route.to))) })] }), _jsxs("div", { children: [_jsx("p", { className: "mb-2 text-xs font-semibold text-gray-500", children: "PREFERENCES" }), _jsx("nav", { className: "space-y-1", children: preferenceRoutes.map((route) => (_jsxs(Link, { to: route.to, className: `flex items-center rounded-md px-3 py-2 text-sm ${route.active
                                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                                        : 'text-gray-700 hover:bg-gray-100'}`, children: [_jsx("span", { className: `mr-3 ${route.active ? 'text-indigo-700' : 'text-gray-500'}`, children: route.icon }), _jsx("span", { children: route.text }), route.badge && (_jsx("span", { className: "ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600", children: route.badge }))] }, route.to))) })] })] }), _jsx("div", { className: "mt-auto pt-6", children: _jsxs("div", { className: "flex items-center", children: [_jsxs(Avatar, { className: "h-10 w-10 mr-3", children: [_jsx(AvatarImage, { src: "/placeholder.svg?height=40&width=40", alt: "User" }), _jsx(AvatarFallback, { children: "IV" })] }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium", children: "Ivan Veniamin" }), _jsx("p", { className: "text-xs text-gray-500", children: "ivan@hashcode.dev" })] })] }) })] }));
};
export default Sidebar;
