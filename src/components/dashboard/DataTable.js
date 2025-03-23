'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export function DataTable({ columns, data }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 5
            }
        }
    });
    return (_jsxs("div", { children: [_jsx("div", { className: "rounded-md border", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                    return (_jsx(TableHead, { className: "text-xs font-medium text-gray-500", children: header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                }) }, headerGroup.id))) }), _jsx(TableBody, { children: table.getRowModel().rows?.length ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { "data-state": row.getIsSelected() && 'selected', children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }) }), _jsxs("div", { className: "flex items-center justify-between space-x-2 py-4", children: [_jsxs("div", { className: "text-sm text-gray-500", children: ["Showing", ' ', table.getState().pagination.pageIndex *
                                table.getState().pagination.pageSize +
                                1, ' ', "to", ' ', Math.min((table.getState().pagination.pageIndex + 1) *
                                table.getState().pagination.pageSize, data.length), ' ', "of ", data.length, " entries"] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: _jsx(ChevronRight, { className: "h-4 w-4" }) })] })] })] }));
}
