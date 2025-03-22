'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Copy, CheckCircle, AlertCircle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import type { DecodeRecord } from '@/shared/data'

export const decodeColumns: ColumnDef<DecodeRecord>[] = [
  {
    accessorKey: 'hash',
    header: 'Hash',
    cell: ({ row }) => {
      return (
        <div className="font-mono text-xs truncate max-w-[120px]">
          {row.original.hash}
        </div>
      )
    }
  },
  {
    accessorKey: 'msisdn',
    header: 'MSISDN',
    cell: ({ row }) => {
      return (
        <div className="flex items-center font-medium">
          {row.original.msisdn}
          <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
            <Copy className="h-3.5 w-3.5" />
          </Button>
        </div>
      )
    }
  },
  {
    accessorKey: 'timestamp',
    header: 'Date & Time',
    cell: ({ row }) => {
      return <div>{row.original.timestamp.toLocaleString()}</div>
    }
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      return <div>{row.original.type}</div>
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status

      return (
        <Badge
          variant={status === 'Success' ? 'default' : 'destructive'}
          className="flex items-center gap-1"
        >
          {status === 'Success' ? (
            <CheckCircle className="h-3 w-3" />
          ) : (
            <AlertCircle className="h-3 w-3" />
          )}
          {status}
        </Badge>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(row.original.msisdn)
                }
              >
                Copy MSISDN
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.hash)}
              >
                Copy Hash
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Delete from history
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]
