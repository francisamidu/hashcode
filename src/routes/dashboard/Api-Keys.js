import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Key, AlertCircle, Eye, EyeOff, Clock, Shield, Info, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
export default function RouteComponent() {
    const [copied, setCopied] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showKeys, setShowKeys] = useState({});
    const [apiKeys, setApiKeys] = useState([
        {
            id: '1',
            name: 'Test Key',
            key: 'sk_test_hashcode_51NcGZKLkqFAy5jZ',
            type: 'test',
            created: new Date(2023, 2, 15),
            lastUsed: new Date(2023, 3, 16),
            status: 'active'
        },
        {
            id: '2',
            name: 'Production Key',
            key: 'sk_live_hashcode_7aBcDeFgHiJkLmNo',
            type: 'production',
            created: new Date(2023, 1, 10),
            lastUsed: new Date(2023, 3, 15),
            status: 'active'
        },
        {
            id: '3',
            name: 'Old Test Key',
            key: 'sk_test_hashcode_9pQrStUvWxYz1234',
            type: 'test',
            created: new Date(2022, 11, 5),
            lastUsed: new Date(2023, 0, 20),
            status: 'revoked'
        }
    ]);
    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };
    const toggleShowKey = (id) => {
        setShowKeys((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    const generateNewKey = (type) => {
        setIsGenerating(true);
        // Simulate API call with timeout
        setTimeout(() => {
            const newKey = {
                id: Math.random().toString(36).substring(2, 11),
                name: type === 'test' ? 'New Test Key' : 'New Production Key',
                key: `sk_${type === 'test' ? 'test' : 'live'}_hashcode_${Math.random().toString(36).substring(2, 15)}`,
                type,
                created: new Date(),
                lastUsed: null,
                status: 'active'
            };
            setApiKeys([newKey, ...apiKeys]);
            setIsGenerating(false);
            setShowKeys((prev) => ({
                ...prev,
                [newKey.id]: true
            }));
        }, 1000);
    };
    const revokeKey = (id) => {
        setApiKeys(apiKeys.map((key) => key.id === id ? { ...key, status: 'revoked' } : key));
    };
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsxs("div", { className: "mb-8 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold", children: "API Keys" }), _jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your API keys for authentication" })] }), _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { children: "Create New API Key" }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Create New API Key" }), _jsx(DialogDescription, { children: "Generate a new API key for your application. Keep your keys secure and never share them publicly." })] }), _jsxs("div", { className: "grid gap-4 py-4", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "key-name", children: "Key Name" }), _jsx(Input, { id: "key-name", placeholder: "e.g., Production Backend" })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { children: "Key Type" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "radio", id: "test-key", name: "key-type", defaultChecked: true }), _jsx(Label, { htmlFor: "test-key", children: "Test Key" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "radio", id: "production-key", name: "key-type" }), _jsx(Label, { htmlFor: "production-key", children: "Production Key" })] })] })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { children: "Permissions" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(Label, { htmlFor: "decode-permission", className: "flex items-center text-sm", children: [_jsx("span", { children: "Decode API" }), _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Info, { className: "h-3.5 w-3.5 ml-1 text-muted-foreground" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "Access to decode MSISDN hashes" }) })] }) })] }), _jsx(Switch, { id: "decode-permission", defaultChecked: true })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(Label, { htmlFor: "batch-permission", className: "flex items-center text-sm", children: [_jsx("span", { children: "Batch Processing" }), _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Info, { className: "h-3.5 w-3.5 ml-1 text-muted-foreground" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "Access to batch decode operations" }) })] }) })] }), _jsx(Switch, { id: "batch-permission", defaultChecked: true })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(Label, { htmlFor: "analytics-permission", className: "flex items-center text-sm", children: [_jsx("span", { children: "Analytics" }), _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Info, { className: "h-3.5 w-3.5 ml-1 text-muted-foreground" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "Access to usage analytics" }) })] }) })] }), _jsx(Switch, { id: "analytics-permission" })] })] })] })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", type: "button", children: "Cancel" }), _jsx(Button, { type: "button", onClick: () => generateNewKey('test'), children: "Generate Key" })] })] })] })] }), _jsx(Card, { children: _jsx(CardHeader, { children: _jsxs(Tabs, { defaultValue: "active", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "active", children: "Active Keys" }), _jsx(TabsTrigger, { value: "revoked", children: "Revoked Keys" })] }), _jsxs("div", { className: "flex items-center", children: [_jsxs(Button, { variant: "ghost", size: "sm", className: "gap-1", children: [_jsx(Eye, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only md:not-sr-only", children: "Show All" })] }), _jsxs(Button, { variant: "ghost", size: "sm", className: "gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only md:not-sr-only", children: "Export" })] })] })] }), _jsx(TabsContent, { value: "active", className: "pt-4", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "API Key" }), _jsx(TableHead, { children: "Created" }), _jsx(TableHead, { children: "Last Used" }), _jsx(TableHead, { children: "Type" }), _jsx(TableHead, { className: "text-right", children: "Actions" })] }) }), _jsx(TableBody, { children: apiKeys
                                                .filter((key) => key.status === 'active')
                                                .map((key) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: key.name }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "font-mono text-sm", children: showKeys[key.id]
                                                                        ? key.key
                                                                        : `${key.key.substring(0, 10)}...${key.key.substring(key.key.length - 4)}` }), _jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", onClick: () => toggleShowKey(key.id), children: showKeys[key.id] ? (_jsx(EyeOff, { className: "h-4 w-4" })) : (_jsx(Eye, { className: "h-4 w-4" })) }), _jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", onClick: () => handleCopy(key.key, key.id), children: copied === key.id ? (_jsx(Check, { className: "h-4 w-4" })) : (_jsx(Copy, { className: "h-4 w-4" })) })] }) }), _jsx(TableCell, { children: key.created.toLocaleDateString() }), _jsx(TableCell, { children: key.lastUsed
                                                            ? key.lastUsed.toLocaleDateString()
                                                            : 'Never' }), _jsx(TableCell, { children: _jsx(Badge, { variant: key.type === 'production'
                                                                ? 'default'
                                                                : 'secondary', children: key.type === 'production' ? 'Production' : 'Test' }) }), _jsx(TableCell, { className: "text-right", children: _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "sm", className: "text-red-600 hover:text-red-700 hover:bg-red-50", children: "Revoke" }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Revoke API Key" }), _jsx(DialogDescription, { children: "Are you sure you want to revoke this API key? This action cannot be undone and any applications using this key will no longer be able to access the API." })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { variant: "destructive", onClick: () => revokeKey(key.id), children: "Revoke Key" })] })] })] }) })] }, key.id))) })] }) }), _jsx(TabsContent, { value: "revoked", className: "pt-4", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "API Key" }), _jsx(TableHead, { children: "Created" }), _jsx(TableHead, { children: "Last Used" }), _jsx(TableHead, { children: "Type" }), _jsx(TableHead, { children: "Status" })] }) }), _jsx(TableBody, { children: apiKeys
                                                .filter((key) => key.status === 'revoked')
                                                .map((key) => (_jsxs(TableRow, { className: "opacity-60", children: [_jsx(TableCell, { className: "font-medium", children: key.name }), _jsx(TableCell, { children: _jsx("div", { className: "font-mono text-sm", children: `${key.key.substring(0, 10)}...${key.key.substring(key.key.length - 4)}` }) }), _jsx(TableCell, { children: key.created.toLocaleDateString() }), _jsx(TableCell, { children: key.lastUsed
                                                            ? key.lastUsed.toLocaleDateString()
                                                            : 'Never' }), _jsx(TableCell, { children: _jsx(Badge, { variant: "outline", children: key.type === 'production' ? 'Production' : 'Test' }) }), _jsx(TableCell, { children: _jsx(Badge, { variant: "destructive", children: "Revoked" }) })] }, key.id))) })] }) })] }) }) }), _jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-3", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "text-base font-medium flex items-center", children: [_jsx(Key, { className: "mr-2 h-5 w-5 text-indigo-600" }), "API Key Security"] }) }), _jsx(CardContent, { children: _jsxs("ul", { className: "space-y-4", children: [_jsxs("li", { className: "flex items-start", children: [_jsx(Shield, { className: "mr-2 h-5 w-5 text-indigo-600 shrink-0 mt-0.5" }), _jsx("span", { className: "text-sm", children: "Never share your API keys in publicly accessible areas such as GitHub or client-side code." })] }), _jsxs("li", { className: "flex items-start", children: [_jsx(Clock, { className: "mr-2 h-5 w-5 text-indigo-600 shrink-0 mt-0.5" }), _jsx("span", { className: "text-sm", children: "Rotate your API keys periodically to minimize security risks." })] }), _jsxs("li", { className: "flex items-start", children: [_jsx(AlertCircle, { className: "mr-2 h-5 w-5 text-indigo-600 shrink-0 mt-0.5" }), _jsx("span", { className: "text-sm", children: "If you suspect a key has been compromised, revoke it immediately and create a new one." })] })] }) }), _jsx(CardFooter, { children: _jsx(Button, { variant: "outline", className: "w-full", children: "View Security Best Practices" }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-base font-medium", children: "Rate Limits" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsx("span", { className: "text-sm font-medium", children: "Test Keys" }), _jsx("span", { className: "text-sm", children: "100 req/min" })] }), _jsx("div", { className: "h-2 w-full rounded-full bg-gray-100", children: _jsx("div", { className: "h-2 rounded-full bg-indigo-500", style: { width: '35%' } }) }), _jsx("div", { className: "mt-1 text-xs text-gray-500", children: "35/100 requests used in the last minute" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsx("span", { className: "text-sm font-medium", children: "Production Keys" }), _jsx("span", { className: "text-sm", children: "1,000 req/min" })] }), _jsx("div", { className: "h-2 w-full rounded-full bg-gray-100", children: _jsx("div", { className: "h-2 rounded-full bg-indigo-500", style: { width: '12%' } }) }), _jsx("div", { className: "mt-1 text-xs text-gray-500", children: "120/1,000 requests used in the last minute" })] })] }) }), _jsx(CardFooter, { children: _jsx(Button, { variant: "outline", className: "w-full", children: "View Usage Analytics" }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-base font-medium", children: "API Documentation" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-sm", children: "Learn how to use your API keys with our comprehensive documentation and code examples." }), _jsx("div", { className: "rounded-md bg-muted p-4", children: _jsx("code", { className: "text-sm", children: `// Example API request
fetch('https://api.hashcode.dev/v1/decode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk_test_hashcode_...'
  },
  body: JSON.stringify({
    hash: '5f4dcc3b5aa765d61d8327deb882cf99'
  })
})` }) })] }), _jsxs(CardFooter, { className: "flex flex-col space-y-2", children: [_jsx(Button, { className: "w-full", children: "View API Reference" }), _jsx(Button, { variant: "outline", className: "w-full", children: "View Code Examples" })] })] })] })] }));
}
export const Route = createFileRoute('/dashboard/Api-Keys')({
    component: RouteComponent
});
