import { jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, useLocation } from '@tanstack/react-router';
export const Route = createFileRoute('/developers')({
    component: RouteComponent
});
function RouteComponent() {
    const location = useLocation();
    return _jsxs("div", { children: ["Hello ", location.pathname, "!"] });
}
