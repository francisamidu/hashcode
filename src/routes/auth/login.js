import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'motion/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import AuthNavbar from '@/components/AuthNavbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import SocialButton from '@/components/SocialButton';
import { useAppState } from '@/state/app';
import { LoginSchema } from '@/utils/validation';
import { useMutation } from '@tanstack/react-query';
import { login as loginFn } from '@/api/auth';
import { handleError } from '@/utils/handleError';
export const Route = createFileRoute('/auth/login')({
    component: RouteComponent
});
export default function RouteComponent() {
    const appName = useAppState((state) => state.appName);
    const login = useMutation({
        mutationFn: loginFn
    });
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });
    const onSubmit = (data) => {
        login.mutate(data, {
            onError: async (error) => {
                const err = handleError(error);
                toast.error(err.message);
            },
            onSuccess: async () => {
                toast.success('Logged in');
            }
        });
    };
    return (_jsxs("div", { className: "flex min-h-screen flex-col", children: [_jsx(AnimatedBackground, {}), _jsx(AuthNavbar, {}), _jsx("main", { className: "flex flex-1 items-center justify-center py-12", children: _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs(motion.div, { className: "w-full max-w-md px-4", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "mb-8 text-center", children: [_jsx(motion.h1, { className: "text-3xl font-bold", initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 }, children: "Log in to your account" }), _jsxs(motion.p, { className: "mt-2 text-sm text-gray-600", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.3 }, children: ["Don't have an account?", ' ', _jsx(Link, { to: "/auth/signup", className: "font-medium text-blue-600 hover:text-blue-500", children: "Sign up" })] })] }), _jsxs(motion.div, { className: "space-y-4 rounded-lg border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.4 }, children: [_jsxs("div", { className: "flex flex-col items-center justify-center my-4 gap-4", children: [_jsx(SocialButton, { className: "block !rounded-sm !w-full", socialType: "google", callback: () => { } }), _jsx(SocialButton, { className: "block !rounded-sm !w-full", socialType: "facebook", callback: () => { } })] }), _jsxs("div", { className: "relative my-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300", children: [_jsx("span", { className: "before:absolute before:left-0 before:w-1/4 before:border-t before:border-gray-300 before:top-1/2 before:transform before:-translate-y-1/2 dark:before:border-gray-600" }), _jsx("span", { className: "px-4", children: "or Continue with Email" }), _jsx("span", { className: "after:absolute after:right-0 after:w-1/4 after:border-t after:border-gray-300 after:top-1/2 after:transform after:-translate-y-1/2 dark:after:border-gray-600" })] }), _jsx(Controller, { name: "email", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", ...field, className: "h-10 rounded-sm" }), errors.email && (_jsx("p", { className: "text-red-500 text-sm", children: errors.email.message }))] })) }), _jsx(Controller, { name: "password", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Link, { to: "/", className: "text-xs font-medium text-blue-600 hover:text-blue-500", children: "Forgot password?" })] }), _jsx(Input, { id: "password", type: "password", ...field, className: "h-10 rounded-sm" }), errors.password && (_jsx("p", { className: "text-red-500 text-sm", children: errors.password.message }))] })) }), _jsx(Controller, { name: "rememberMe", control: control, render: ({ field: { value, onChange } }) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "remember", checked: value, onCheckedChange: onChange }), _jsx("label", { htmlFor: "remember", className: "text-sm text-gray-600", children: "Remember me" })] })) }), _jsx("div", { children: _jsx(Button, { className: "w-full rounded-sm", type: "submit", disabled: isSubmitting, children: "Log in" }) })] }), _jsx(motion.div, { className: "mt-6 text-center", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.6 }, children: _jsxs("p", { className: "text-xs text-gray-600", children: ["By logging in, you agree to ", appName, "'s", ' ', _jsx(Link, { to: "/", className: "text-gray-900 underline underline-offset-2", children: "Terms of Use" }), ' ', "and", ' ', _jsx(Link, { to: "/", className: "text-gray-900 underline underline-offset-2", children: "Privacy Statement" }), "."] }) })] }) }) })] }));
}
