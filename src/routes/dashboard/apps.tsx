import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Plus,
  Search,
  Settings,
  MoreVertical,
  BarChart3,
  ExternalLink,
  Trash2,
  ChevronRight,
  Filter,
  ArrowUpDown,
  Code,
  Key,
  Shield,
  AlertCircle,
  Copy
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@components/ui/tooltip'

interface App {
  id: string
  name: string
  description: string
  apiKey: string
  status: 'active' | 'inactive' | 'development'
  createdAt: string
  lastActive: string
  requests: number
  environment: 'production' | 'development' | 'staging'
  teamMembers: number
  icon?: string
}

export const Route = createFileRoute('/dashboard/apps')({
  component: RouteComponent
})

function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showNewAppDialog, setShowNewAppDialog] = useState(false)
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false)
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)

  const apps: App[] = [
    {
      id: 'app-1',
      name: 'E-commerce Hash Verification',
      description:
        'Verify product authenticity using hash codes for our online store',
      apiKey: 'dh_prod_a1b2c3d4e5f6g7h8i9j0',
      status: 'active',
      createdAt: '2023-10-15',
      lastActive: '2025-03-26',
      requests: 45678,
      environment: 'production',
      teamMembers: 5,
      icon: '🛒'
    },
    {
      id: 'app-2',
      name: 'Document Integrity System',
      description:
        'Ensure document integrity for legal department using hash verification',
      apiKey: 'dh_prod_j9i8h7g6f5e4d3c2b1a0',
      status: 'active',
      createdAt: '2023-11-22',
      lastActive: '2025-03-25',
      requests: 12345,
      environment: 'production',
      teamMembers: 3,
      icon: '📄'
    },
    {
      id: 'app-3',
      name: 'Mobile App Authentication',
      description: 'Hash-based authentication for our mobile application',
      apiKey: 'dh_dev_z1x2c3v4b5n6m7k8j9h0',
      status: 'development',
      createdAt: '2024-01-10',
      lastActive: '2025-03-20',
      requests: 7890,
      environment: 'development',
      teamMembers: 4,
      icon: '📱'
    },
    {
      id: 'app-4',
      name: 'Data Integrity Testing',
      description: 'Testing environment for data integrity verification',
      apiKey: 'dh_stg_q1w2e3r4t5y6u7i8o9p0',
      status: 'inactive',
      createdAt: '2024-02-05',
      lastActive: '2025-03-01',
      requests: 2345,
      environment: 'staging',
      teamMembers: 2,
      icon: '🧪'
    }
  ]

  const filteredApps = apps.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      case 'development':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getEnvironmentColor = (env: string) => {
    switch (env) {
      case 'production':
        return 'bg-purple-100 text-purple-800'
      case 'development':
        return 'bg-blue-100 text-blue-800'
      case 'staging':
        return 'bg-amber-100 text-amber-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleOpenSettings = (app: App) => {
    setSelectedApp(app)
    setShowSettingsDialog(true)
  }

  const handleShowApiKey = (app: App) => {
    setSelectedApp(app)
    setShowApiKeyDialog(true)
  }

  const handleDeleteApp = (app: App) => {
    setSelectedApp(app)
    setShowDeleteDialog(true)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Apps</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage your DeHash applications
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search apps..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={() => setShowNewAppDialog(true)}>
            <Plus className="mr-2 h-4 w-4" /> New App
          </Button>
        </div>
      </div>

      <Tabs defaultValue="grid" className="mb-8">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ArrowUpDown className="h-3.5 w-3.5" />
              Sort
            </Button>
          </div>
        </div>

        <TabsContent value="grid" className="mt-4">
          {filteredApps.length === 0 ? (
            <Card className="flex flex-col items-center justify-center p-8 text-center">
              <div className="rounded-full bg-indigo-100 p-3 mb-4">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">No apps found</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                {searchQuery
                  ? "We couldn't find any apps matching your search. Try a different query or clear your search."
                  : "You haven't created any apps yet. Create your first app to start using DeHash services."}
              </p>
              <Button onClick={() => setShowNewAppDialog(true)}>
                <Plus className="mr-2 h-4 w-4" /> Create New App
              </Button>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredApps.map((app) => (
                <Card
                  key={app.id}
                  className="overflow-hidden flex flex-col justify-between"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-xl">
                          {app.icon || '🔐'}
                        </div>
                        <div>
                          <CardTitle className="text-base font-medium">
                            {app.name}
                          </CardTitle>
                          <CardDescription className="line-clamp-1">
                            {app.description}
                          </CardDescription>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={() => handleOpenSettings(app)}
                          >
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleShowApiKey(app)}
                          >
                            <Key className="mr-2 h-4 w-4" />
                            View API Key
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDeleteApp(app)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete App
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge
                        variant="secondary"
                        className={getStatusColor(app.status)}
                      >
                        {app.status.charAt(0).toUpperCase() +
                          app.status.slice(1)}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={getEnvironmentColor(app.environment)}
                      >
                        {app.environment.charAt(0).toUpperCase() +
                          app.environment.slice(1)}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          API Requests
                        </span>
                        <span className="font-medium">
                          {app.requests.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">API Key</span>
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-xs truncate max-w-[120px]">
                            {app.apiKey.substring(0, 10)}...
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    navigator.clipboard.writeText(app.apiKey)
                                  }}
                                >
                                  <Copy className="h-3.5 w-3.5" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy API key</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Created On
                        </span>
                        <span className="font-medium">{app.createdAt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="list" className="mt-4">
          {filteredApps.length === 0 ? (
            <Card className="flex flex-col items-center justify-center p-8 text-center">
              <div className="rounded-full bg-indigo-100 p-3 mb-4">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">No apps found</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                {searchQuery
                  ? "We couldn't find any apps matching your search. Try a different query or clear your search."
                  : "You haven't created any apps yet. Create your first app to start using DeHash services."}
              </p>
              <Button onClick={() => setShowNewAppDialog(true)}>
                <Plus className="mr-2 h-4 w-4" /> Create New App
              </Button>
            </Card>
          ) : (
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm text-muted-foreground border-b">
                <div className="col-span-4">App</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Environment</div>
                <div className="col-span-2">API Requests</div>
                <div className="col-span-1">Created</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="grid grid-cols-12 gap-4 p-4 items-center border-b last:border-0 hover:bg-gray-50"
                >
                  <div className="col-span-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-xl">
                        {app.icon || '🔐'}
                      </div>
                      <div>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {app.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge
                      variant="secondary"
                      className={getStatusColor(app.status)}
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    <Badge
                      variant="secondary"
                      className={getEnvironmentColor(app.environment)}
                    >
                      {app.environment.charAt(0).toUpperCase() +
                        app.environment.slice(1)}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    {app.requests.toLocaleString()}
                  </div>
                  <div className="col-span-1">{app.createdAt}</div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={`/dashboard/apps/${app.id}`}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleOpenSettings(app)}
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleShowApiKey(app)}>
                          <Key className="mr-2 h-4 w-4" />
                          View API Key
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleDeleteApp(app)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete App
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* New App Dialog */}
      <Dialog open={showNewAppDialog} onOpenChange={setShowNewAppDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New App</DialogTitle>
            <DialogDescription>
              Set up a new application to use DeHash services in your project.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="app-name">App Name</Label>
              <Input id="app-name" placeholder="My Awesome App" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="app-description">Description</Label>
              <Textarea
                id="app-description"
                placeholder="Briefly describe what this app will be used for"
                className="min-h-[80px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="environment">Environment</Label>
                <Select defaultValue="development">
                  <SelectTrigger id="environment">
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="app-icon">App Icon (Emoji)</Label>
                <Input id="app-icon" placeholder="🔐" />
              </div>
            </div>
            <Separator className="my-2" />
            <div className="space-y-2">
              <h4 className="font-medium">Security Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rate-limiting"
                    className="rounded border-gray-300"
                    defaultChecked
                  />
                  <Label htmlFor="rate-limiting">Enable Rate Limiting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="ip-restrictions"
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="ip-restrictions">IP Restrictions</Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowNewAppDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowNewAppDialog(false)}>
              Create App
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* API Key Dialog */}
      <Dialog open={showApiKeyDialog} onOpenChange={setShowApiKeyDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>API Key</DialogTitle>
            <DialogDescription>
              Your API key for {selectedApp?.name}. Keep this secure and never
              share it publicly.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg border p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm text-muted-foreground">API Key</Label>
                <Badge
                  variant="outline"
                  className="bg-indigo-100 text-indigo-800"
                >
                  {selectedApp?.environment}
                </Badge>
              </div>
              <div className="font-mono text-sm bg-white p-3 rounded border mb-2 overflow-x-auto">
                {selectedApp?.apiKey}
              </div>
              <div className="flex items-center text-sm text-amber-600 mt-2">
                <Shield className="h-4 w-4 mr-1" />
                Never share this key publicly or commit it to your code
                repository
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Usage Example</h4>
              <div className="font-mono text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                {`curl -X POST https://api.dehash.com/v1/verify \\
  -H "Authorization: Bearer ${selectedApp?.apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{"hash": "5f4dcc3b5aa765d61d8327deb882cf99", "text": "password"}'`}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowApiKeyDialog(false)}
            >
              Close
            </Button>
            <Button>Regenerate Key</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>App Settings</DialogTitle>
            <DialogDescription>
              Configure settings for {selectedApp?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Tabs defaultValue="general">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="team">Team Access</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-app-name">App Name</Label>
                  <Input id="edit-app-name" defaultValue={selectedApp?.name} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-app-description">Description</Label>
                  <Textarea
                    id="edit-app-description"
                    defaultValue={selectedApp?.description}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="edit-environment">Environment</Label>
                    <Select defaultValue={selectedApp?.environment}>
                      <SelectTrigger id="edit-environment">
                        <SelectValue placeholder="Select environment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="staging">Staging</SelectItem>
                        <SelectItem value="production">Production</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="edit-status">Status</Label>
                    <Select defaultValue={selectedApp?.status}>
                      <SelectTrigger id="edit-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="security" className="space-y-4 pt-4">
                <div className="rounded-lg border p-4 bg-gray-50">
                  <h4 className="font-medium mb-2">Rate Limiting</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="grid gap-2">
                      <Label htmlFor="rate-limit">Requests per minute</Label>
                      <Input id="rate-limit" type="number" defaultValue="60" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="burst-limit">Burst limit</Label>
                      <Input
                        id="burst-limit"
                        type="number"
                        defaultValue="100"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enable-rate-limiting"
                      className="rounded border-gray-300"
                      defaultChecked
                    />
                    <Label htmlFor="enable-rate-limiting">
                      Enable rate limiting
                    </Label>
                  </div>
                </div>
                <div className="rounded-lg border p-4 bg-gray-50">
                  <h4 className="font-medium mb-2">IP Restrictions</h4>
                  <div className="grid gap-2 mb-4">
                    <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                    <Textarea
                      id="allowed-ips"
                      placeholder="Enter IP addresses, one per line"
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enable-ip-restrictions"
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="enable-ip-restrictions">
                      Enable IP restrictions
                    </Label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="team" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Team Members</h4>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Plus className="h-3.5 w-3.5" />
                      Add Member
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src="/placeholder.svg?height=32&width=32"
                            alt="Avatar"
                          />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-sm text-muted-foreground">
                            john@example.com
                          </div>
                        </div>
                      </div>
                      <Badge>Admin</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src="/placeholder.svg?height=32&width=32"
                            alt="Avatar"
                          />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-sm text-muted-foreground">
                            jane@example.com
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">Developer</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src="/placeholder.svg?height=32&width=32"
                            alt="Avatar"
                          />
                          <AvatarFallback>RJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Robert Johnson</div>
                          <div className="text-sm text-muted-foreground">
                            robert@example.com
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">Viewer</Badge>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 bg-gray-50">
                  <h4 className="font-medium mb-2">Access Permissions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="allow-read"
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="allow-read">Allow Read Access</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="allow-write"
                        className="rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="allow-write">Allow Write Access</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="allow-delete"
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor="allow-delete">Allow Delete Access</Label>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowSettingsDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowSettingsDialog(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete App Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-red-600">Delete App</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedApp?.name}? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-medium text-red-800">Warning</h4>
                  <ul className="mt-1 list-disc pl-5 text-red-700">
                    <li>
                      All API keys associated with this app will be invalidated
                    </li>
                    <li>All team members will lose access to this app</li>
                    <li>
                      All app settings and configurations will be permanently
                      deleted
                    </li>
                    <li>This action cannot be reversed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="confirm-delete" className="text-sm font-medium">
                Type{' '}
                <span className="font-mono font-bold">{selectedApp?.name}</span>{' '}
                to confirm
              </Label>
              <Input
                id="confirm-delete"
                className="mt-1"
                placeholder={selectedApp?.name}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(false)}
            >
              Delete App
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
