import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from '@/components/dashboard/Sidebar';
import NotFound from '@/components/NotFound';
import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/dashboard')({
    component: RouteComponent,
    notFoundComponent: NotFound
});
function RouteComponent() {
    return (_jsxs("main", { children: [_jsx(Sidebar, {}), _jsx("section", { className: "ml-[260px]", children: _jsx(Outlet, {}) })] }));
}
