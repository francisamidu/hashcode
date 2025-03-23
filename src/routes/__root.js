import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NotFound from '@/components/NotFound';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
const Index = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Outlet, {}), _jsx(TanStackRouterDevtools, { initialIsOpen: false })] }));
};
export const Route = createRootRoute({
    component: Index,
    notFoundComponent: NotFound
});
export default Index;
