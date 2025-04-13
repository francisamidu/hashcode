import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  Copy,
  Check,
  Key,
  AlertCircle,
  Eye,
  EyeOff,
  Clock,
  Shield,
  Info,
  Download
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

interface ApiKey {
  id: string
  name: string
  key: string
  type: 'test' | 'production'
  created: Date
  lastUsed: Date | null
  status: 'active' | 'revoked'
}

export default function RouteComponent() {
  const [copied, setCopied] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
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
  ])

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const toggleShowKey = (id: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const generateNewKey = (type: 'test' | 'production') => {
    setIsGenerating(true)

    // Simulate API call with timeout
    setTimeout(() => {
      const newKey = {
        id: Math.random().toString(36).substring(2, 11),
        name: type === 'test' ? 'New Test Key' : 'New Production Key',
        key: `sk_${type === 'test' ? 'test' : 'live'}_hashcode_${Math.random().toString(36).substring(2, 15)}`,
        type,
        created: new Date(),
        lastUsed: null,
        status: 'active' as const
      }

      setApiKeys([newKey, ...apiKeys])
      setIsGenerating(false)
      setShowKeys((prev) => ({
        ...prev,
        [newKey.id]: true
      }))
    }, 1000)
  }

  const revokeKey = (id: string) => {
    setApiKeys(
      apiKeys.map((key) =>
        key.id === id ? { ...key, status: 'revoked' as const } : key
      )
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">API Keys</h1>
          <p className="text-muted-foreground mt-1">
            Manage your API keys for authentication
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New API Key</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New API Key</DialogTitle>
              <DialogDescription>
                Generate a new API key for your application. Keep your keys
                secure and never share them publicly.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="key-name">Key Name</Label>
                <Input id="key-name" placeholder="e.g., Production Backend" />
              </div>
              <div className="grid gap-2">
                <Label>Key Type</Label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="test-key"
                      name="key-type"
                      defaultChecked
                    />
                    <Label htmlFor="test-key">Test Key</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="production-key" name="key-type" />
                    <Label htmlFor="production-key">Production Key</Label>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Permissions</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="decode-permission"
                      className="flex items-center text-sm"
                    >
                      <span>Decode API</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Access to decode MSISDN hashes</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Switch id="decode-permission" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="batch-permission"
                      className="flex items-center text-sm"
                    >
                      <span>Batch Processing</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Access to batch decode operations</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Switch id="batch-permission" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="analytics-permission"
                      className="flex items-center text-sm"
                    >
                      <span>Analytics</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Access to usage analytics</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Switch id="analytics-permission" />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="button" onClick={() => generateNewKey('test')}>
                Generate Key
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <Tabs defaultValue="active">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="active">Active Keys</TabsTrigger>
                <TabsTrigger value="revoked">Revoked Keys</TabsTrigger>
              </TabsList>
              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only">Show All</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only">Export</span>
                </Button>
              </div>
            </div>

            <TabsContent value="active" className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>API Key</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys
                    .filter((key) => key.status === 'active')
                    .map((key) => (
                      <TableRow key={key.id}>
                        <TableCell className="font-medium">
                          {key.name}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="font-mono text-sm">
                              {showKeys[key.id]
                                ? key.key
                                : `${key.key.substring(0, 10)}...${key.key.substring(key.key.length - 4)}`}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleShowKey(key.id)}
                            >
                              {showKeys[key.id] ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleCopy(key.key, key.id)}
                            >
                              {copied === key.id ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          {key.created.toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {key.lastUsed
                            ? key.lastUsed.toLocaleDateString()
                            : 'Never'}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              key.type === 'production'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {key.type === 'production' ? 'Production' : 'Test'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                Revoke
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Revoke API Key</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to revoke this API key?
                                  This action cannot be undone and any
                                  applications using this key will no longer be
                                  able to access the API.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <Button variant="outline">Cancel</Button>
                                <Button
                                  variant="destructive"
                                  onClick={() => revokeKey(key.id)}
                                >
                                  Revoke Key
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="revoked" className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>API Key</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys
                    .filter((key) => key.status === 'revoked')
                    .map((key) => (
                      <TableRow key={key.id} className="opacity-60">
                        <TableCell className="font-medium">
                          {key.name}
                        </TableCell>
                        <TableCell>
                          <div className="font-mono text-sm">
                            {`${key.key.substring(0, 10)}...${key.key.substring(key.key.length - 4)}`}
                          </div>
                        </TableCell>
                        <TableCell>
                          {key.created.toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {key.lastUsed
                            ? key.lastUsed.toLocaleDateString()
                            : 'Never'}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {key.type === 'production' ? 'Production' : 'Test'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">Revoked</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium flex items-center">
              <Key className="mr-2 h-5 w-5 text-indigo-600" />
              API Key Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="mr-2 h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Never share your API keys in publicly accessible areas such as
                  GitHub or client-side code.
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Rotate your API keys periodically to minimize security risks.
                </span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="mr-2 h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-sm">
                  If you suspect a key has been compromised, revoke it
                  immediately and create a new one.
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Security Best Practices
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Rate Limits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Test Keys</span>
                  <span className="text-sm">100 req/min</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-indigo-500"
                    style={{ width: '35%' }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  35/100 requests used in the last minute
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Production Keys</span>
                  <span className="text-sm">1,000 req/min</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-indigo-500"
                    style={{ width: '12%' }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  120/1,000 requests used in the last minute
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Usage Analytics
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              API Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Learn how to use your API keys with our comprehensive
              documentation and code examples.
            </p>
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">
                {`// Example API request
fetch('https://api.hashcode.dev/v1/decode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk_test_hashcode_...'
  },
  body: JSON.stringify({
    hash: '5f4dcc3b5aa765d61d8327deb882cf99'
  })
})`}
              </code>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full">View API Reference</Button>
            <Button variant="outline" className="w-full">
              View Code Examples
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/dashboard/api-keys')({
  component: RouteComponent
})
