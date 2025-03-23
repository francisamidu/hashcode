'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Crown, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from '@tanstack/react-router';
const UserCard = ({ username, transactionCount, onClick }) => {
    const navigate = useNavigate();
    const handleMenuAction = (action) => {
        switch (action) {
            case 'profile':
                navigate({ to: '/dashboard/profile' });
                break;
            case 'settings':
                navigate({ to: '/dashboard/settings' });
                break;
            case 'logout':
                // Implement logout logic
                console.log('Logging out');
                break;
        }
    };
    return (_jsxs(DropdownMenu, { children: [_jsxs("div", { className: "rounded-md bg-gray-50 p-2 flex items-center justify-between border border-gray-100 hover:bg-gray-100 transition-colors", onClick: onClick, children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "mr-2 text-amber-400 bg-white rounded p-3", children: _jsx(Crown, { size: 16 }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: username }), _jsxs("p", { className: "text-xs text-gray-500", children: [transactionCount.toLocaleString(), " Transactions"] })] })] }), _jsx(DropdownMenuTrigger, { asChild: true, children: _jsx("button", { className: "text-gray-400 hover:text-gray-600", children: _jsx(ChevronDown, { size: 16 }) }) })] }), _jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => handleMenuAction('profile'), className: "cursor-pointer", children: [_jsx(User, { className: "mr-2 h-4 w-4" }), _jsx("span", { children: "Profile" })] }), _jsxs(DropdownMenuItem, { onClick: () => handleMenuAction('settings'), className: "cursor-pointer", children: [_jsx(Settings, { className: "mr-2 h-4 w-4" }), _jsx("span", { children: "Settings" })] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => handleMenuAction('logout'), className: "cursor-pointer text-red-600 focus:text-red-600", children: [_jsx(LogOut, { className: "mr-2 h-4 w-4" }), _jsx("span", { children: "Logout" })] })] })] }));
};
export default UserCard;
