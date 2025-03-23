import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Search, Upload, Download, Copy, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { DataTable } from '@/components/dashboard/DataTable';
import { decodeColumns } from '@/components/dashboard/Columns';
import { decodeHistory } from '@/shared/data';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/dashboard/Decode')({
    component: RouteComponent
});
function RouteComponent() {
    const [singleHash, setSingleHash] = useState('');
    const [batchHashes, setBatchHashes] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const [decodedResults, setDecodedResults] = useState([]);
    const [activeTab, setActiveTab] = useState('single');
    const handleSingleDecode = () => {
        if (!singleHash)
            return;
        setIsDecoding(true);
        // Simulate API call with timeout
        setTimeout(() => {
            // Mock result - in a real app, this would come from your API
            const result = {
                hash: singleHash,
                msisdn: '+254' + Math.floor(Math.random() * 900000000 + 100000000),
                timestamp: new Date(),
                status: 'Success'
            };
            setDecodedResults([result, ...decodedResults.slice(0, 4)]);
            setIsDecoding(false);
        }, 800);
    };
    const handleBatchDecode = () => {
        if (!batchHashes)
            return;
        setIsDecoding(true);
        // Split by newlines to get individual hashes
        const hashes = batchHashes.split('\n').filter((hash) => hash.trim() !== '');
        // Simulate API call with timeout
        setTimeout(() => {
            // Mock results - in a real app, these would come from your API
            const results = hashes.map((hash) => ({
                hash: hash.trim(),
                msisdn: '+254' + Math.floor(Math.random() * 900000000 + 100000000),
                timestamp: new Date(),
                status: Math.random() > 0.1 ? 'Success' : 'Failed'
            }));
            setDecodedResults([
                ...results,
                ...decodedResults.slice(0, 5 - results.length)
            ]);
            setIsDecoding(false);
        }, 1200);
    };
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsx("h1", { className: "mb-8 text-2xl font-bold", children: "Decode MSISDN Hashes" }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Hash Decoder" }), _jsx(CardDescription, { children: "Transform M-Pesa MSISDN hashes into clear phone numbers" })] }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "single", onValueChange: setActiveTab, children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [_jsx(TabsTrigger, { value: "single", children: "Single Hash" }), _jsx(TabsTrigger, { value: "batch", children: "Batch Processing" })] }), _jsxs(TabsContent, { value: "single", className: "space-y-4 pt-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "singleHash", className: "text-sm font-medium", children: "Enter M-Pesa MSISDN Hash" }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { id: "singleHash", placeholder: "e.g., 5f4dcc3b5aa765d61d8327deb882cf99", value: singleHash, onChange: (e) => setSingleHash(e.target.value) }), _jsxs(Button, { onClick: handleSingleDecode, disabled: !singleHash || isDecoding, className: "shrink-0", children: [isDecoding && activeTab === 'single' ? (_jsx(RefreshCw, { className: "mr-2 h-4 w-4 animate-spin" })) : null, "Decode"] })] })] }), _jsxs("div", { className: "rounded-md bg-muted p-4", children: [_jsx("div", { className: "text-sm font-medium", children: "Tips:" }), _jsxs("ul", { className: "mt-2 list-disc pl-5 text-sm text-muted-foreground", children: [_jsx("li", { children: "Enter the complete hash string without any spaces" }), _jsx("li", { children: "Hashes are case-sensitive" }), _jsx("li", { children: "Results are cached for faster lookup of previously decoded hashes" })] })] })] }), _jsxs(TabsContent, { value: "batch", className: "space-y-4 pt-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "batchHashes", className: "text-sm font-medium", children: "Enter Multiple Hashes (one per line)" }), _jsxs(Button, { variant: "outline", size: "sm", className: "h-8 gap-1", children: [_jsx(Upload, { className: "h-3.5 w-3.5" }), _jsx("span", { className: "text-xs", children: "Upload CSV" })] })] }), _jsx(Textarea, { id: "batchHashes", placeholder: "e.g., 5f4dcc3b5aa765d61d8327deb882cf99\n7c6a180b36896a0a8c02787eeafb0e4c\n6cb75f652a9b52798eb6cf2201057c73", className: "min-h-[120px]", value: batchHashes, onChange: (e) => setBatchHashes(e.target.value) }), _jsx("div", { className: "flex justify-end", children: _jsxs(Button, { onClick: handleBatchDecode, disabled: !batchHashes || isDecoding, children: [isDecoding && activeTab === 'batch' ? (_jsx(RefreshCw, { className: "mr-2 h-4 w-4 animate-spin" })) : null, "Decode Batch"] }) })] }), _jsxs("div", { className: "rounded-md bg-muted p-4", children: [_jsx("div", { className: "text-sm font-medium", children: "Batch Processing:" }), _jsxs("ul", { className: "mt-2 list-disc pl-5 text-sm text-muted-foreground", children: [_jsx("li", { children: "Process up to 1,000 hashes at once" }), _jsx("li", { children: "Results can be exported as CSV" }), _jsx("li", { children: "For larger batches, consider using our API directly" })] })] })] })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Decode Results" }), _jsx(CardDescription, { children: "View your most recent decode results" })] }), _jsx(CardContent, { children: decodedResults.length > 0 ? (_jsxs("div", { className: "space-y-4", children: [_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Hash" }), _jsx(TableHead, { children: "MSISDN" }), _jsx(TableHead, { children: "Status" })] }) }), _jsx(TableBody, { children: decodedResults.map((result, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-mono text-xs truncate max-w-[120px]", children: result.hash }), _jsx(TableCell, { className: "font-medium", children: _jsxs("div", { className: "flex items-center", children: [result.msisdn, _jsx(Button, { variant: "ghost", size: "icon", className: "h-6 w-6 ml-1", children: _jsx(Copy, { className: "h-3.5 w-3.5" }) })] }) }), _jsx(TableCell, { children: _jsxs(Badge, { variant: result.status === 'Success'
                                                                        ? 'default'
                                                                        : 'destructive', className: "flex items-center gap-1", children: [result.status === 'Success' ? (_jsx(CheckCircle, { className: "h-3 w-3" })) : (_jsx(AlertCircle, { className: "h-3 w-3" })), result.status] }) })] }, index))) })] }), _jsx("div", { className: "flex justify-end", children: _jsxs(Button, { variant: "outline", size: "sm", className: "gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "Export Results"] }) })] })) : (_jsxs("div", { className: "flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center", children: [_jsx("div", { className: "rounded-full bg-primary/10 p-3", children: _jsx(Search, { className: "h-6 w-6 text-primary" }) }), _jsx("h3", { className: "mt-4 text-lg font-semibold", children: "No Results Yet" }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Decode a hash to see the results here" })] })) })] })] }), _jsxs(Card, { className: "mt-6", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-base font-medium", children: "Decode History" }), _jsx(CardDescription, { children: "View your recent decode operations" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "mb-4 flex flex-col gap-4 sm:flex-row", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" }), _jsx(Input, { placeholder: "Search history...", className: "pl-8" })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "h-10 gap-1", children: [_jsx(Download, { className: "h-4 w-4" }), "Export History"] })] }), _jsx(DataTable, { columns: decodeColumns, data: decodeHistory })] })] })] }));
}
