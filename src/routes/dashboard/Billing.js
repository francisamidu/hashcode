import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download, CreditCard, CheckCircle, XCircle, AlertCircle, ChevronRight, Plus, Clock, ArrowRight, FileText, BarChart3, Database, Check, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
export const Route = createFileRoute('/dashboard/Billing')({
    component: RouteComponent
});
function RouteComponent() {
    const [currentPlan, setCurrentPlan] = useState('professional');
    const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [showAddPaymentDialog, setShowAddPaymentDialog] = useState(false);
    const plans = [
        {
            id: 'starter',
            name: 'Starter',
            price: 49,
            description: 'For individuals and small projects',
            features: [
                'Up to 10,000 API calls per month',
                'Batch processing up to 100 hashes',
                'Email support',
                '1 API key',
                'Basic analytics'
            ],
            limits: {
                apiCalls: 10000,
                batchSize: 100,
                supportLevel: 'Email'
            }
        },
        {
            id: 'professional',
            name: 'Professional',
            price: 199,
            description: 'For growing businesses with advanced needs',
            features: [
                'Up to 100,000 API calls per month',
                'Batch processing up to 1,000 hashes',
                'Priority email support',
                '5 API keys',
                'Advanced analytics',
                'Webhook integrations',
                'Custom rate limits'
            ],
            limits: {
                apiCalls: 100000,
                batchSize: 1000,
                supportLevel: 'Priority'
            },
            popular: true
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 499,
            description: 'For large organizations with high-volume needs',
            features: [
                'Unlimited API calls',
                'Batch processing up to 10,000 hashes',
                '24/7 dedicated support',
                'Unlimited API keys',
                'Enterprise analytics',
                'Custom integrations',
                'SLA guarantees',
                'Dedicated account manager'
            ],
            limits: {
                apiCalls: Number.POSITIVE_INFINITY,
                batchSize: 10000,
                supportLevel: 'Dedicated'
            }
        }
    ];
    const planFeatures = [
        {
            name: 'API Calls',
            starter: '10,000/mo',
            professional: '100,000/mo',
            enterprise: 'Unlimited'
        },
        {
            name: 'Batch Size',
            starter: '100 hashes',
            professional: '1,000 hashes',
            enterprise: '10,000 hashes'
        },
        {
            name: 'API Keys',
            starter: '1',
            professional: '5',
            enterprise: 'Unlimited'
        },
        {
            name: 'Support',
            starter: 'Email',
            professional: 'Priority Email',
            enterprise: '24/7 Dedicated'
        },
        {
            name: 'Analytics',
            starter: 'Basic',
            professional: 'Advanced',
            enterprise: 'Enterprise'
        },
        {
            name: 'Webhook Integrations',
            starter: false,
            professional: true,
            enterprise: true
        },
        {
            name: 'Custom Rate Limits',
            starter: false,
            professional: true,
            enterprise: true
        },
        {
            name: 'SLA Guarantee',
            starter: false,
            professional: false,
            enterprise: true
        },
        {
            name: 'Dedicated Account Manager',
            starter: false,
            professional: false,
            enterprise: true
        }
    ];
    const currentPlanData = plans.find((plan) => plan.id === currentPlan) || plans[1];
    const handleUpgradePlan = (planId) => {
        setSelectedPlan(planId);
        setShowUpgradeDialog(true);
    };
    const confirmPlanChange = () => {
        setCurrentPlan(selectedPlan);
        setShowUpgradeDialog(false);
    };
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsxs("div", { className: "mb-8 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold", children: "Billing" }), _jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your subscription and payment methods" })] }), _jsxs(Button, { variant: "outline", className: "gap-1", children: [_jsx(FileText, { className: "h-4 w-4" }), "Billing Documentation"] })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [_jsxs(Card, { className: "md:col-span-2", children: [_jsxs(CardHeader, { className: "pb-2", children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Current Plan" }), _jsxs(CardDescription, { children: ["You are currently on the ", currentPlanData.name, " plan"] })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h2", { className: "text-2xl font-bold", children: currentPlanData.name }), currentPlanData.popular && (_jsx(Badge, { className: "bg-indigo-100 text-indigo-800 hover:bg-indigo-100", children: "Popular" }))] }), _jsx("p", { className: "text-muted-foreground", children: currentPlanData.description })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-3xl font-bold", children: ["$", currentPlanData.price] }), _jsx("div", { className: "text-sm text-muted-foreground", children: "per month" })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Database, { className: "h-4 w-4 text-indigo-600" }), _jsx("span", { className: "font-medium", children: "API Calls" })] }), _jsxs("span", { className: "text-sm", children: ["56,789 /", ' ', currentPlanData.limits.apiCalls ===
                                                                        Number.POSITIVE_INFINITY
                                                                        ? 'Unlimited'
                                                                        : currentPlanData.limits.apiCalls.toLocaleString()] })] }), _jsx(Progress, { value: currentPlanData.limits.apiCalls === Number.POSITIVE_INFINITY
                                                            ? 30
                                                            : (56789 / currentPlanData.limits.apiCalls) * 100, className: "h-2" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "h-4 w-4 text-indigo-600" }), _jsx("span", { className: "font-medium", children: "Batch Processing" })] }), _jsxs("span", { className: "text-sm", children: ["458 / ", currentPlanData.limits.batchSize.toLocaleString(), ' ', "hashes"] })] }), _jsx(Progress, { value: (458 / currentPlanData.limits.batchSize) * 100, className: "h-2" })] })] }), _jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: currentPlanData.features.map((feature, index) => (_jsxs(Badge, { variant: "outline", className: "bg-gray-50", children: [_jsx(Check, { className: "mr-1 h-3 w-3 text-green-600" }), feature] }, index))) })] }), _jsxs(CardFooter, { className: "flex justify-between border-t pt-6", children: [_jsx(Button, { variant: "outline", onClick: () => handleUpgradePlan(currentPlan === 'starter' ? 'professional' : 'enterprise'), children: currentPlan === 'enterprise' ? 'Contact Sales' : 'Upgrade Plan' }), _jsxs("div", { className: "text-sm text-muted-foreground", children: ["Next billing date:", ' ', _jsx("span", { className: "font-medium", children: "May 15, 2023" })] })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { className: "pb-2", children: _jsx(CardTitle, { className: "text-base font-medium", children: "Usage This Month" }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: "$156.78" }), _jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: "Billing period: Apr 15 - May 14" }), _jsxs("div", { className: "mt-4 space-y-3", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: "Base plan" }), _jsxs("span", { children: ["$", currentPlanData.price, ".00"] })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: "Additional API calls" }), _jsx("span", { children: "$45.78" })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: "Batch processing" }), _jsx("span", { children: "$11.00" })] }), _jsx(Separator, { className: "my-2" }), _jsxs("div", { className: "flex justify-between font-medium", children: [_jsx("span", { children: "Total" }), _jsx("span", { children: "$156.78" })] })] }), _jsxs(Button, { variant: "outline", className: "mt-4 w-full gap-1", children: [_jsx(BarChart3, { className: "h-4 w-4" }), "View Usage Details"] })] })] })] }), _jsx("div", { className: "mt-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Available Plans" }), _jsx(CardDescription, { children: "Compare plans and choose the one that fits your needs" })] }), _jsx(CardContent, { children: _jsx("div", { className: "overflow-x-auto", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "w-[200px]", children: "Feature" }), plans.map((plan) => (_jsx(TableHead, { className: "text-center", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("span", { className: "font-bold", children: plan.name }), _jsxs("span", { className: "text-muted-foreground", children: ["$", plan.price, "/mo"] })] }) }, plan.id)))] }) }), _jsxs(TableBody, { children: [planFeatures.map((feature, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: feature.name }), _jsx(TableCell, { className: "text-center", children: typeof feature.starter === 'boolean' ? (feature.starter ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mx-auto" })) : (_jsx(XCircle, { className: "h-5 w-5 text-gray-300 mx-auto" }))) : (feature.starter) }), _jsx(TableCell, { className: "text-center", children: typeof feature.professional === 'boolean' ? (feature.professional ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mx-auto" })) : (_jsx(XCircle, { className: "h-5 w-5 text-gray-300 mx-auto" }))) : (feature.professional) }), _jsx(TableCell, { className: "text-center", children: typeof feature.enterprise === 'boolean' ? (feature.enterprise ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mx-auto" })) : (_jsx(XCircle, { className: "h-5 w-5 text-gray-300 mx-auto" }))) : (feature.enterprise) })] }, index))), _jsxs(TableRow, { children: [_jsx(TableCell, {}), plans.map((plan) => (_jsx(TableCell, { className: "text-center", children: _jsx(Button, { variant: plan.id === currentPlan ? 'outline' : 'default', disabled: plan.id === currentPlan, onClick: () => handleUpgradePlan(plan.id), className: "w-full", children: plan.id === currentPlan
                                                                    ? 'Current Plan'
                                                                    : plan.id === 'enterprise'
                                                                        ? 'Contact Sales'
                                                                        : 'Select Plan' }) }, plan.id)))] })] })] }) }) })] }) }), _jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Payment Methods" }), _jsx(CardDescription, { children: "Manage your payment methods" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "mr-4 h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold", children: "VISA" }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: "Visa ending in 4242" }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Expires 12/2025" })] })] }), _jsx(Badge, { children: "Default" })] }), _jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "mr-4 h-12 w-12 rounded-md bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-bold", children: "MC" }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: "Mastercard ending in 5678" }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Expires 08/2024" })] })] }), _jsx(Button, { variant: "ghost", size: "sm", children: "Make Default" })] }), _jsxs(Button, { variant: "outline", className: "w-full mt-2 gap-1", onClick: () => setShowAddPaymentDialog(true), children: [_jsx(Plus, { className: "h-4 w-4" }), "Add Payment Method"] })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Billing History" }), _jsx(CardDescription, { children: "View all your past invoices" })] }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "invoices", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "invoices", children: "Invoices" }), _jsx(TabsTrigger, { value: "transactions", children: "Transactions" })] }), _jsxs(TabsContent, { value: "invoices", className: "pt-4", children: [_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Invoice" }), _jsx(TableHead, { children: "Date" }), _jsx(TableHead, { children: "Amount" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, {})] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "INV-2023045" }), _jsx(TableCell, { children: "April 15, 2023" }), _jsx(TableCell, { children: "$199.00" }), _jsx(TableCell, { children: _jsxs(Badge, { variant: "default", className: "bg-green-100 text-green-800", children: [_jsx(CheckCircle, { className: "mr-1 h-3 w-3" }), "Paid"] }) }), _jsx(TableCell, { children: _jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "PDF"] }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "INV-2023044" }), _jsx(TableCell, { children: "March 15, 2023" }), _jsx(TableCell, { children: "$199.00" }), _jsx(TableCell, { children: _jsxs(Badge, { variant: "default", className: "bg-green-100 text-green-800", children: [_jsx(CheckCircle, { className: "mr-1 h-3 w-3" }), "Paid"] }) }), _jsx(TableCell, { children: _jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "PDF"] }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "INV-2023043" }), _jsx(TableCell, { children: "February 15, 2023" }), _jsx(TableCell, { children: "$199.00" }), _jsx(TableCell, { children: _jsxs(Badge, { variant: "default", className: "bg-green-100 text-green-800", children: [_jsx(CheckCircle, { className: "mr-1 h-3 w-3" }), "Paid"] }) }), _jsx(TableCell, { children: _jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "PDF"] }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "INV-2023042" }), _jsx(TableCell, { children: "January 15, 2023" }), _jsx(TableCell, { children: "$199.00" }), _jsx(TableCell, { children: _jsxs(Badge, { variant: "default", className: "bg-green-100 text-green-800", children: [_jsx(CheckCircle, { className: "mr-1 h-3 w-3" }), "Paid"] }) }), _jsx(TableCell, { children: _jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "PDF"] }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "INV-2023041" }), _jsx(TableCell, { children: "December 15, 2022" }), _jsx(TableCell, { children: "$199.00" }), _jsx(TableCell, { children: _jsxs(Badge, { variant: "default", className: "bg-green-100 text-green-800", children: [_jsx(CheckCircle, { className: "mr-1 h-3 w-3" }), "Paid"] }) }), _jsx(TableCell, { children: _jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "PDF"] }) })] })] })] }), _jsx("div", { className: "mt-4 flex justify-center", children: _jsxs(Button, { variant: "outline", size: "sm", className: "gap-1", children: ["View All Invoices", _jsx(ChevronRight, { className: "h-4 w-4" })] }) })] }), _jsxs(TabsContent, { value: "transactions", className: "pt-4", children: [_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Transaction ID" }), _jsx(TableHead, { children: "Date" }), _jsx(TableHead, { children: "Description" }), _jsx(TableHead, { children: "Amount" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "TXN-20230415" }), _jsx(TableCell, { children: "April 15, 2023" }), _jsx(TableCell, { children: "Monthly subscription" }), _jsx(TableCell, { children: "$199.00" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "TXN-20230315" }), _jsx(TableCell, { children: "March 15, 2023" }), _jsx(TableCell, { children: "Monthly subscription" }), _jsx(TableCell, { children: "$199.00" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "TXN-20230215" }), _jsx(TableCell, { children: "February 15, 2023" }), _jsx(TableCell, { children: "Monthly subscription" }), _jsx(TableCell, { children: "$199.00" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "TXN-20230115" }), _jsx(TableCell, { children: "January 15, 2023" }), _jsx(TableCell, { children: "Monthly subscription" }), _jsx(TableCell, { children: "$199.00" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "TXN-20221215" }), _jsx(TableCell, { children: "December 15, 2022" }), _jsx(TableCell, { children: "Monthly subscription" }), _jsx(TableCell, { children: "$199.00" })] })] })] }), _jsx("div", { className: "mt-4 flex justify-center", children: _jsxs(Button, { variant: "outline", size: "sm", className: "gap-1", children: ["View All Transactions", _jsx(ChevronRight, { className: "h-4 w-4" })] }) })] })] }) })] })] }), _jsx("div", { className: "mt-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Need Help?" }), _jsx(CardDescription, { children: "Contact our billing support team for assistance" })] }), _jsxs(CardContent, { className: "flex flex-col md:flex-row gap-6", children: [_jsxs("div", { className: "flex-1 rounded-lg border p-4", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center", children: _jsx(CreditCard, { className: "h-5 w-5 text-indigo-600" }) }), _jsx("h3", { className: "font-medium", children: "Billing Questions" })] }), _jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Have questions about your bill, payment methods, or subscription? Our billing team is here to help." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Contact Billing Support" })] }), _jsxs("div", { className: "flex-1 rounded-lg border p-4", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center", children: _jsx(Zap, { className: "h-5 w-5 text-indigo-600" }) }), _jsx("h3", { className: "font-medium", children: "Enterprise Plans" })] }), _jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Need a custom plan for your organization? Contact our sales team to discuss enterprise options." }), _jsx(Button, { className: "w-full", children: "Contact Sales" })] })] })] }) }), _jsx(Dialog, { open: showUpgradeDialog, onOpenChange: setShowUpgradeDialog, children: _jsxs(DialogContent, { className: "sm:max-w-[500px]", children: [_jsxs(DialogHeader, { children: [_jsxs(DialogTitle, { children: [selectedPlan === 'starter' ? 'Downgrade' : 'Upgrade', " to", ' ', plans.find((p) => p.id === selectedPlan)?.name, " Plan"] }), _jsx(DialogDescription, { children: selectedPlan === 'starter'
                                        ? "Are you sure you want to downgrade your plan? You'll lose access to some features."
                                        : 'Upgrade your plan to get access to more features and higher limits.' })] }), _jsxs("div", { className: "py-4", children: [_jsxs("div", { className: "rounded-lg border p-4 mb-4", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "font-medium", children: [currentPlanData.name, " Plan"] }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Current plan" })] }), _jsxs("div", { className: "text-xl font-bold", children: ["$", currentPlanData.price, "/mo"] })] }), _jsx("div", { className: "flex items-center justify-center", children: _jsx(ArrowRight, { className: "h-6 w-6 text-muted-foreground" }) }), _jsxs("div", { className: "flex justify-between items-center mt-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "font-medium", children: [plans.find((p) => p.id === selectedPlan)?.name, " Plan"] }), _jsx("div", { className: "text-sm text-muted-foreground", children: "New plan" })] }), _jsxs("div", { className: "text-xl font-bold", children: ["$", plans.find((p) => p.id === selectedPlan)?.price, "/mo"] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "font-medium", children: "Changes in your plan:" }), _jsxs("ul", { className: "space-y-1", children: [selectedPlan === 'enterprise' && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-sm", children: [_jsx(Check, { className: "mr-2 h-4 w-4 text-green-600" }), "Unlimited API calls (was 100,000/mo)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(Check, { className: "mr-2 h-4 w-4 text-green-600" }), "Batch processing up to 10,000 hashes (was 1,000)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(Check, { className: "mr-2 h-4 w-4 text-green-600" }), "24/7 dedicated support (was priority email)"] })] })), selectedPlan === 'professional' &&
                                                    currentPlan === 'starter' && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-sm", children: [_jsx(Check, { className: "mr-2 h-4 w-4 text-green-600" }), "100,000 API calls/mo (was 10,000/mo)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(Check, { className: "mr-2 h-4 w-4 text-green-600" }), "Batch processing up to 1,000 hashes (was 100)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(Check, { className: "mr-2 h-4 w-4 text-green-600" }), "Priority email support (was standard email)"] })] })), selectedPlan === 'starter' && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-sm", children: [_jsx(AlertCircle, { className: "mr-2 h-4 w-4 text-amber-600" }), "10,000 API calls/mo (was 100,000/mo)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(AlertCircle, { className: "mr-2 h-4 w-4 text-amber-600" }), "Batch processing limited to 100 hashes (was 1,000)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(AlertCircle, { className: "mr-2 h-4 w-4 text-amber-600" }), "Standard email support (was priority email)"] }), _jsxs("li", { className: "flex items-center text-sm", children: [_jsx(AlertCircle, { className: "mr-2 h-4 w-4 text-amber-600" }), "No webhook integrations or custom rate limits"] })] }))] })] }), selectedPlan === 'enterprise' && (_jsx("div", { className: "mt-4 rounded-lg bg-gray-50 p-4", children: _jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "h-5 w-5 text-indigo-600 mr-2 mt-0.5" }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: "Enterprise Plan Activation" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Our sales team will contact you within 1 business day to complete your upgrade to the Enterprise plan." })] })] }) }))] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setShowUpgradeDialog(false), children: "Cancel" }), _jsx(Button, { onClick: confirmPlanChange, children: selectedPlan === 'enterprise'
                                        ? 'Request Upgrade'
                                        : selectedPlan === 'starter'
                                            ? 'Downgrade Plan'
                                            : 'Upgrade Plan' })] })] }) }), _jsx(Dialog, { open: showAddPaymentDialog, onOpenChange: setShowAddPaymentDialog, children: _jsxs(DialogContent, { className: "sm:max-w-[500px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Add Payment Method" }), _jsx(DialogDescription, { children: "Add a new credit card or debit card to your account." })] }), _jsxs("div", { className: "py-4 space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "card-name", children: "Cardholder Name" }), _jsx(Input, { id: "card-name", placeholder: "Name as it appears on card" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "card-number", children: "Card Number" }), _jsx(Input, { id: "card-number", placeholder: "1234 5678 9012 3456" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "expiry", children: "Expiration Date" }), _jsx(Input, { id: "expiry", placeholder: "MM/YY" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "cvc", children: "CVC" }), _jsx(Input, { id: "cvc", placeholder: "123" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "billing-address", children: "Billing Address" }), _jsx(Input, { id: "billing-address", placeholder: "Street address" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "city", children: "City" }), _jsx(Input, { id: "city", placeholder: "City" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "postal-code", children: "Postal Code" }), _jsx(Input, { id: "postal-code", placeholder: "Postal code" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "country", children: "Country" }), _jsxs(Select, { defaultValue: "us", children: [_jsx(SelectTrigger, { id: "country", children: _jsx(SelectValue, { placeholder: "Select country" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "us", children: "United States" }), _jsx(SelectItem, { value: "ca", children: "Canada" }), _jsx(SelectItem, { value: "uk", children: "United Kingdom" }), _jsx(SelectItem, { value: "au", children: "Australia" }), _jsx(SelectItem, { value: "ke", children: "Kenya" })] })] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "checkbox", id: "default-payment", className: "rounded border-gray-300" }), _jsx(Label, { htmlFor: "default-payment", children: "Make this my default payment method" })] })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setShowAddPaymentDialog(false), children: "Cancel" }), _jsx(Button, { onClick: () => setShowAddPaymentDialog(false), children: "Add Payment Method" })] })] }) })] }));
}
