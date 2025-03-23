import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CategoryItem({ name, color, percentage }) {
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `h-3 w-3 rounded-full ${color} mr-2` }), _jsx("span", { className: "text-sm", children: name })] }), _jsxs("span", { className: "text-sm font-medium", children: [percentage, "%"] })] }), _jsx("div", { className: "h-2 w-full rounded-full bg-gray-100", children: _jsx("div", { className: `h-2 rounded-full ${color}`, style: { width: `${percentage}%` } }) })] }));
}
