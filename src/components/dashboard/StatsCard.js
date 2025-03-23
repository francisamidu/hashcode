import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from '@/components/ui/card';
import { ChevronUp, ArrowDownRight } from 'lucide-react';
export function StatsCard({ title, value, icon, change, period }) {
    const isPositive = change >= 0;
    return (_jsx(Card, { children: _jsxs(CardContent, { className: "py-2 px-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: title }), icon] }), _jsxs("div", { className: "mt-4", children: [_jsx("p", { className: "text-2xl font-bold", children: value }), _jsxs("div", { className: "mt-2 flex items-center text-xs", children: [_jsxs("span", { className: `flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`, children: [isPositive ? (_jsx(ChevronUp, { className: "mr-1 h-3 w-3" })) : (_jsx(ArrowDownRight, { className: "mr-1 h-3 w-3" })), Math.abs(change), "%"] }), _jsx("span", { className: "ml-2 text-gray-500", children: period })] })] })] }) }));
}
