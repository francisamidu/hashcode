import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AltFooter from '@/components/AltFooter';
import AuthNavbar from '@/components/AuthNavbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
const Index = () => {
    return (_jsxs(_Fragment, { children: [_jsx(AuthNavbar, {}), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx(AltFooter, {})] }));
};
export const Route = createRootRoute({
    component: Index
});
export default Index;
