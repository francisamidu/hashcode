import { jsx as _jsx } from "react/jsx-runtime";
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/features')({
    component: RouteComponent,
});
function RouteComponent() {
    return _jsx("div", { children: "Hello \"/features\"!" });
}
