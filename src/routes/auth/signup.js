import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AnimatedBackground from '@/components/AnimatedBackground';
import AuthNavbar from '@/components/AuthNavbar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { CheckIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SocialButton from '@/components/SocialButton';
import { appTypes, benefits } from '@/shared/constants';
import { useAppState } from '@/state/app';
import { SignupSchema } from '@/utils/validation';
export const Route = createFileRoute('/auth/signup')({
    component: RouteComponent
});
export default function RouteComponent() {
    const appName = useAppState((state) => state.appName);
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            company: '',
            building: '',
            termsAgreed: false
        }
    });
    const onSubmit = async (data) => {
        try {
            console.log(data);
            // Perform signup logic here
        }
        catch (error) {
            // Handle signup error
            console.error(error);
        }
    };
    return (_jsxs("div", { className: "flex min-h-screen flex-col", children: [_jsx(AnimatedBackground, {}), _jsx(AuthNavbar, {}), _jsx("main", { className: "flex-1 py-12", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { className: "mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.2 }, children: [_jsx("h1", { className: "mb-8 text-3xl font-bold", children: "Build with us" }), _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs("div", { className: "space-y-4 rounded-lg border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm", children: [_jsxs("div", { className: "flex flex-col items-center justify-center my-4 gap-4", children: [_jsx(SocialButton, { className: "block !rounded-sm !w-full", socialType: "google", callback: () => { } }), _jsx(SocialButton, { className: "block !rounded-sm !w-full", socialType: "facebook", callback: () => { } })] }), _jsxs("div", { className: "relative my-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300", children: [_jsx("span", { className: "before:absolute before:left-0 before:w-1/4 before:border-t before:border-gray-300 before:top-1/2 before:transform before:-translate-y-1/2 dark:before:border-gray-600" }), _jsx("span", { className: "px-4", children: "or Continue with Email" }), _jsx("span", { className: "after:absolute after:right-0 after:w-1/4 after:border-t after:border-gray-300 after:top-1/2 after:transform after:-translate-y-1/2 dark:after:border-gray-600" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(Controller, { name: "firstName", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstName", children: "First name" }), _jsx(Input, { id: "firstName", placeholder: "First name", className: "h-10 rounded-sm", ...field }), errors.firstName && (_jsx("p", { className: "text-red-500 text-sm", children: errors.firstName.message }))] })) }), _jsx(Controller, { name: "lastName", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "lastName", children: "Last name" }), _jsx(Input, { id: "lastName", placeholder: "Last name", className: "h-10 rounded-sm", ...field }), errors.lastName && (_jsx("p", { className: "text-red-500 text-sm", children: errors.lastName.message }))] })) })] }), _jsx(Controller, { name: "email", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "Email", className: "h-10 rounded-sm", ...field }), errors.email && (_jsx("p", { className: "text-red-500 text-sm", children: errors.email.message }))] })) }), _jsx(Controller, { name: "password", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", placeholder: "Choose a Password", className: "h-10 rounded-sm", ...field }), errors.password && (_jsx("p", { className: "text-red-500 text-sm", children: errors.password.message }))] })) }), _jsx(Controller, { name: "company", control: control, render: ({ field }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "company", children: "Company" }), _jsx(Input, { id: "company", placeholder: "Company", className: "h-10 rounded-sm", ...field }), errors.company && (_jsx("p", { className: "text-red-500 text-sm", children: errors.company.message }))] })) }), _jsx(Controller, { name: "building", control: control, render: ({ field: { onChange, value } }) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "building", children: "What are you building?" }), _jsxs(Select, { onValueChange: onChange, value: value, children: [_jsx(SelectTrigger, { className: "h-10 rounded-sm", children: _jsx(SelectValue, { placeholder: "What are you building?" }) }), _jsx(SelectContent, { children: appTypes.map((appType, index) => (_jsx(SelectItem, { value: appType.value, children: appType.name }, index))) })] }), errors.building && (_jsx("p", { className: "text-red-500 text-sm", children: errors.building.message }))] })) }), _jsx(Controller, { name: "termsAgreed", control: control, render: ({ field: { value, onChange } }) => (_jsxs("div", { className: "flex items-start space-x-2 pt-2", children: [_jsx(Checkbox, { id: "terms", checked: value, onCheckedChange: onChange }), _jsxs("label", { htmlFor: "terms", className: "text-xs text-gray-600", children: ["I agree to ", appName, "'s", ' ', _jsx(Link, { to: "/", className: "text-gray-900 underline underline-offset-2", children: "Terms of Use" }), ' ', "and consent to ", appName, "'s", ' ', _jsx(Link, { to: "/", className: "text-gray-900 underline underline-offset-2", children: "Privacy Statement" }), "."] })] })) }), _jsx("div", { children: _jsx(Button, { type: "submit", className: "w-full rounded-sm bg-gray-300 hover:bg-gray-400", variant: "secondary", disabled: isSubmitting, children: "Create account" }) })] }) })] }), _jsx(motion.div, { className: "flex flex-col justify-start mt-16", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.4 }, children: _jsxs("div", { className: "mb-6 rounded-lg backdrop-blur-sm", children: [_jsx("h2", { className: "mb-4 text-sm font-medium", children: "By creating a free account, you can:" }), _jsx("ul", { className: "space-y-5 mt-3 ", children: benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-start", children: [_jsx(CheckIcon, { className: "mr-2 mt-0.5 h-4 w-4 text-indigo-400" }), _jsx("span", { className: "text-sm text-gray-600", children: benefit })] }, index))) }), _jsxs("div", { className: "mt-4 text-sm", children: ["Have questions?", ' ', _jsx(motion.span, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Link, { to: "/", className: "underline", children: "Contact sales" }) })] })] }) })] }) }) })] }));
}
