import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import '@/styles/main.css';
// Import the generated route tree
import { routeTree } from '@/routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
// Create a client
const queryClient = new QueryClient();
// Create a new router instance
const router = createRouter({ routeTree });
// Render the app
const rootElement = document.getElementById('root');
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(_jsx(StrictMode, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(ToastContainer, {}), _jsx(RouterProvider, { router: router }), _jsx(ReactQueryDevtools, { initialIsOpen: false })] }) }));
}
