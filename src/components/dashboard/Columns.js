'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
export const decodeColumns = [
    {
        accessorKey: 'hash',
        header: 'Hash',
        cell: ({ row }) => {
            return (_jsx("div", { className: "font-mono text-xs truncate max-w-[120px]", children: row.original.hash }));
        }
    },
    {
        accessorKey: 'msisdn',
        header: 'MSISDN',
        cell: ({ row }) => {
            return (_jsxs("div", { className: "flex items-center font-medium", children: [row.original.msisdn, _jsx(Button, { variant: "ghost", size: "icon", className: "h-6 w-6 ml-1", children: _jsx(Copy, { className: "h-3.5 w-3.5" }) })] }));
        }
    },
    {
        accessorKey: 'timestamp',
        header: 'Date & Time',
        cell: ({ row }) => {
            return _jsx("div", { children: row.original.timestamp.toLocaleString() });
        }
    },
    {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => {
            return _jsx("div", { children: row.original.type });
        }
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const status = row.original.status;
            return (_jsxs(Badge, { variant: status === 'Success' ? 'default' : 'destructive', className: "flex items-center gap-1", children: [status === 'Success' ? (_jsx(CheckCircle, { className: "h-3 w-3" })) : (_jsx(AlertCircle, { className: "h-3 w-3" })), status] }));
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return (_jsx("div", { className: "flex justify-end", children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "Actions" }), _jsx(DropdownMenuItem, { onClick: () => navigator.clipboard.writeText(row.original.msisdn), children: "Copy MSISDN" }), _jsx(DropdownMenuItem, { onClick: () => navigator.clipboard.writeText(row.original.hash), children: "Copy Hash" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { className: "text-red-600", children: "Delete from history" })] })] }) }));
        }
    }
];
