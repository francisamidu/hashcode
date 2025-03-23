import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Progress } from '@/components/ui/progress';
export function OperatorItem({ name, value }) {
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsx("span", { className: "text-sm", children: name }), _jsxs("span", { className: "text-sm font-medium", children: [value, "%"] })] }), _jsx(Progress, { value: value, className: "h-2" })] }));
}
