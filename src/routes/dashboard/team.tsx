import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Search,
  MoreVertical,
  Mail,
  Phone,
  Building,
  MapPin,
  Globe,
  Edit,
  Trash2,
  UserPlus,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  Filter,
  ArrowUpDown,
  Users,
  UserCog,
  Settings,
  Lock
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'invited' | 'inactive'
  avatar?: string
  department?: string
  joinedAt: string
  lastActive?: string
}

interface CompanyInfo {
  name: string
  logo?: string
  industry: string
  size: string
  website: string
  address: string
  city: string
  country: string
  postalCode: string
  phone: string
  email: string
}

export const Route = createFileRoute('/dashboard/team')({
  component: RouteComponent
})

function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showInviteDialog, setShowInviteDialog] = useState(false)
  const [showEditMemberDialog, setShowEditMemberDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showEditCompanyDialog, setShowEditCompanyDialog] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const teamMembers: TeamMember[] = [
    {
      id: 'user-1',
      name: 'Alex Johnson',
      email: 'alex@dehash.com',
      role: 'Admin',
      status: 'active',
      joinedAt: '2023-05-15',
      lastActive: '2025-03-26'
    },
    {
      id: 'user-2',
      name: 'Sarah Williams',
      email: 'sarah@dehash.com',
      role: 'Developer',
      status: 'active',
      joinedAt: '2023-06-22',
      lastActive: '2025-03-25'
    },
    {
      id: 'user-3',
      name: 'Michael Chen',
      email: 'michael@dehash.com',
      role: 'Manager',
      status: 'active',
      joinedAt: '2023-07-10',
      lastActive: '2025-03-24'
    },
    {
      id: 'user-4',
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      role: 'Viewer',
      status: 'invited',
      joinedAt: '2025-03-20'
    },
    {
      id: 'user-5',
      name: 'David Kim',
      email: 'david@dehash.com',
      role: 'Developer',
      status: 'inactive',
      joinedAt: '2023-09-05',
      lastActive: '2025-02-15'
    }
  ]

  const companyInfo: CompanyInfo = {
    name: 'DeHash Technologies',
    industry: 'Information Technology',
    size: '10-50',
    website: 'https://dehash.com',
    address: '123 Innovation Way',
    city: 'Nairobi',
    country: 'Kenya',
    postalCode: '00100',
    phone: '+254 712 345 678',
    email: 'info@dehash.com'
  }

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'invited':
        return 'bg-blue-100 text-blue-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-800'
      case 'Manager':
        return 'bg-indigo-100 text-indigo-800'
      case 'Developer':
        return 'bg-cyan-100 text-cyan-800'
      case 'Viewer':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleEditMember = (member: TeamMember) => {
    setSelectedMember(member)
    setShowEditMemberDialog(true)
  }

  const handleDeleteMember = (member: TeamMember) => {
    setSelectedMember(member)
    setShowDeleteDialog(true)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Team Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team members and company information
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search team members..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={() => setShowInviteDialog(true)}>
            <UserPlus className="mr-2 h-4 w-4" /> Invite
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-medium">
                    Team Members
                  </CardTitle>
                  <CardDescription>
                    Manage your team and their access levels
                  </CardDescription>
                </div>
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
            </CardHeader>
            <CardContent>
              {filteredMembers.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="rounded-full bg-indigo-100 p-3 mb-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    No team members found
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    {searchQuery
                      ? "We couldn't find any team members matching your search. Try a different query or clear your search."
                      : "You haven't added any team members yet. Invite your first team member to get started."}
                  </p>
                  <Button onClick={() => setShowInviteDialog(true)}>
                    <UserPlus className="mr-2 h-4 w-4" /> Invite Team Member
                  </Button>
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredMembers.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={
                                    member.avatar ||
                                    '/placeholder.svg?height=32&width=32'
                                  }
                                  alt={member.name}
                                />
                                <AvatarFallback>
                                  {member.name
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{member.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {member.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="secondary"
                              className={getRoleColor(member.role)}
                            >
                              {member.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="secondary"
                              className={getStatusColor(member.status)}
                            >
                              {member.status === 'active' && (
                                <CheckCircle className="mr-1 h-3 w-3" />
                              )}
                              {member.status === 'invited' && (
                                <Clock className="mr-1 h-3 w-3" />
                              )}
                              {member.status === 'inactive' && (
                                <XCircle className="mr-1 h-3 w-3" />
                              )}
                              {member.status.charAt(0).toUpperCase() +
                                member.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
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
                                  onClick={() => handleEditMember(member)}
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                {member.status === 'invited' && (
                                  <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Resend Invite
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onClick={() => handleDeleteMember(member)}
                                  className="text-red-600"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  {member.status === 'invited'
                                    ? 'Cancel Invite'
                                    : 'Remove'}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between pt-4">
              <div className="text-sm text-muted-foreground">
                Showing {filteredMembers.length} of {teamMembers.length} team
                members
              </div>
              <Button variant="outline" size="sm" className="gap-1" asChild>
                <Link to="/dashboard/team/roles">
                  Manage Roles & Permissions
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base font-medium">
                Access Activity
              </CardTitle>
              <CardDescription>
                Recent team member activity and access logs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Alex Johnson</span>
                      <span className="text-sm text-muted-foreground">
                        logged in
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Today at 9:42 AM
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-50">
                    192.168.1.105
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <UserCog className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Michael Chen</span>
                      <span className="text-sm text-muted-foreground">
                        updated API permissions
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Yesterday at 3:15 PM
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-50">
                    192.168.1.87
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserPlus className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Sarah Williams</span>
                      <span className="text-sm text-muted-foreground">
                        invited Emily Rodriguez
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      March 25, 2025 at 11:30 AM
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-50">
                    192.168.1.92
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">David Kim</span>
                      <span className="text-sm text-muted-foreground">
                        failed login attempt
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      March 24, 2025 at 9:05 AM
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-50">
                    203.0.113.42
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1">
                View All Activity Logs
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  Company Information
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setShowEditCompanyDialog(true)}
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit company info</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-2xl mb-3">
                  {companyInfo.name.charAt(0)}
                </div>
                <h3 className="text-lg font-medium">{companyInfo.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {companyInfo.industry}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Invited Members</div>
                    <div className="text-sm text-muted-foreground">
                      {companyInfo.size} employees
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base font-medium">
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-indigo-600" />
                    <span className="font-medium">
                      Two-Factor Authentication
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-indigo-600" />
                    <span className="font-medium">Single Sign-On (SSO)</span>
                  </div>
                  <Badge variant="outline" className="bg-gray-100">
                    Disabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-indigo-600" />
                    <span className="font-medium">Password Policy</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    Strong
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1" asChild>
                <Link to="/dashboard/team/security">
                  Manage Security Settings
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base font-medium">
                Team Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <div className="font-medium">Team Members</div>
                    <div>{teamMembers.length} total</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-full bg-gray-100 h-2">
                      <div
                        className="rounded-full bg-indigo-600 h-2"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                    <span className="text-sm">80%</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="mb-2 text-sm font-medium">
                    Roles Distribution
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <div>Admin</div>
                        <div>
                          {teamMembers.filter((m) => m.role === 'Admin').length}
                        </div>
                      </div>
                      <div className="rounded-full bg-gray-100 h-2">
                        <div
                          className="rounded-full bg-purple-600 h-2"
                          style={{ width: '20%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <div>Manager</div>
                        <div>
                          {
                            teamMembers.filter((m) => m.role === 'Manager')
                              .length
                          }
                        </div>
                      </div>
                      <div className="rounded-full bg-gray-100 h-2">
                        <div
                          className="rounded-full bg-indigo-600 h-2"
                          style={{ width: '20%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <div>Developer</div>
                        <div>
                          {
                            teamMembers.filter((m) => m.role === 'Developer')
                              .length
                          }
                        </div>
                      </div>
                      <div className="rounded-full bg-gray-100 h-2">
                        <div
                          className="rounded-full bg-cyan-600 h-2"
                          style={{ width: '40%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <div>Viewer</div>
                        <div>
                          {
                            teamMembers.filter((m) => m.role === 'Viewer')
                              .length
                          }
                        </div>
                      </div>
                      <div className="rounded-full bg-gray-100 h-2">
                        <div
                          className="rounded-full bg-gray-400 h-2"
                          style={{ width: '20%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1" asChild>
                <Link to="/dashboard/team/analytics">
                  View Team Analytics
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Invite Team Member Dialog */}
      <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Invite Team Member</DialogTitle>
            <DialogDescription>
              Send an invitation to join your team. They'll receive an email
              with instructions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="invite-email">Email Address</Label>
              <Input
                id="invite-email"
                placeholder="colleague@example.com"
                type="email"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="invite-role">Role</Label>
                <Select defaultValue="developer">
                  <SelectTrigger id="invite-role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="invite-department">Department</Label>
                <Select defaultValue="engineering">
                  <SelectTrigger id="invite-department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="invite-message">
                Personal Message (Optional)
              </Label>
              <Textarea
                id="invite-message"
                placeholder="Add a personal note to your invitation"
                className="min-h-[80px]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="send-welcome"
                className="rounded border-gray-300"
                defaultChecked
              />
              <Label htmlFor="send-welcome">Send welcome resources</Label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowInviteDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowInviteDialog(false)}>
              Send Invitation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Team Member Dialog */}
      <Dialog
        open={showEditMemberDialog}
        onOpenChange={setShowEditMemberDialog}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Team Member</DialogTitle>
            <DialogDescription>
              Update information and permissions for {selectedMember?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4 mb-2">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={
                    selectedMember?.avatar ||
                    '/placeholder.svg?height=48&width=48'
                  }
                  alt={selectedMember?.name}
                />
                <AvatarFallback>
                  {selectedMember?.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{selectedMember?.name}</div>
                <div className="text-sm text-muted-foreground">
                  {selectedMember?.email}
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-role">Role</Label>
                <Select defaultValue={selectedMember?.role.toLowerCase()}>
                  <SelectTrigger id="edit-role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-department">Department</Label>
                <Select
                  defaultValue={
                    selectedMember?.department?.toLowerCase() || 'engineering'
                  }
                >
                  <SelectTrigger id="edit-department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-status">Status</Label>
              <Select defaultValue={selectedMember?.status}>
                <SelectTrigger id="edit-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator className="my-2" />
            <div className="space-y-2">
              <h4 className="font-medium">App Access</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md border p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-indigo-100 flex items-center justify-center text-lg">
                      🛒
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        E-commerce Hash Verification
                      </div>
                    </div>
                  </div>
                  <Select defaultValue="read-write">
                    <SelectTrigger className="w-[130px] h-8">
                      <SelectValue placeholder="Access level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="read-write">Read & Write</SelectItem>
                      <SelectItem value="read-only">Read Only</SelectItem>
                      <SelectItem value="no-access">No Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between rounded-md border p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-indigo-100 flex items-center justify-center text-lg">
                      📄
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Document Integrity System
                      </div>
                    </div>
                  </div>
                  <Select defaultValue="read-only">
                    <SelectTrigger className="w-[130px] h-8">
                      <SelectValue placeholder="Access level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="read-write">Read & Write</SelectItem>
                      <SelectItem value="read-only">Read Only</SelectItem>
                      <SelectItem value="no-access">No Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowEditMemberDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowEditMemberDialog(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Team Member Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-red-600">
              {selectedMember?.status === 'invited'
                ? 'Cancel Invitation'
                : 'Remove Team Member'}
            </DialogTitle>
            <DialogDescription>
              {selectedMember?.status === 'invited'
                ? `Are you sure you want to cancel the invitation for ${selectedMember?.email}?`
                : `Are you sure you want to remove ${selectedMember?.name} from your team?`}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {selectedMember?.status !== 'invited' && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800">Warning</h4>
                    <ul className="mt-1 list-disc pl-5 text-red-700">
                      <li>
                        This user will lose access to all apps and resources
                      </li>
                      <li>
                        Any API keys created by this user will remain active
                      </li>
                      <li>
                        You can re-invite this user in the future if needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {selectedMember?.status !== 'invited' && (
              <div className="mt-4">
                <Label htmlFor="remove-reason" className="text-sm font-medium">
                  Reason (Optional)
                </Label>
                <Textarea
                  id="remove-reason"
                  placeholder="Provide a reason for removing this team member"
                  className="mt-1"
                />
              </div>
            )}
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
              {selectedMember?.status === 'invited'
                ? 'Cancel Invitation'
                : 'Remove Member'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Company Dialog */}
      <Dialog
        open={showEditCompanyDialog}
        onOpenChange={setShowEditCompanyDialog}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Company Information</DialogTitle>
            <DialogDescription>
              Update your company details and contact information
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" defaultValue={companyInfo.name} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company-industry">Industry</Label>
                <Select
                  defaultValue={companyInfo.industry
                    .toLowerCase()
                    .replace(/\s+/g, '-')}
                >
                  <SelectTrigger id="company-industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="information-technology">
                      Information Technology
                    </SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-size">Company Size</Label>
                <Select defaultValue={companyInfo.size}>
                  <SelectTrigger id="company-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="10-50">10-50 employees</SelectItem>
                    <SelectItem value="50-200">50-200 employees</SelectItem>
                    <SelectItem value="200-500">200-500 employees</SelectItem>
                    <SelectItem value="500+">500+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-website">Website</Label>
              <Input id="company-website" defaultValue={companyInfo.website} />
            </div>
            <Separator className="my-2" />
            <h4 className="font-medium">Contact Information</h4>
            <div className="grid gap-2">
              <Label htmlFor="company-address">Address</Label>
              <Input id="company-address" defaultValue={companyInfo.address} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company-city">City</Label>
                <Input id="company-city" defaultValue={companyInfo.city} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-country">Country</Label>
                <Select defaultValue="kenya">
                  <SelectTrigger id="company-country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="uganda">Uganda</SelectItem>
                    <SelectItem value="tanzania">Tanzania</SelectItem>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="south-africa">South Africa</SelectItem>
                    <SelectItem value="ghana">Ghana</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-postal">Postal Code</Label>
                <Input
                  id="company-postal"
                  defaultValue={companyInfo.postalCode}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company-phone">Phone</Label>
                <Input id="company-phone" defaultValue={companyInfo.phone} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-email">Email</Label>
                <Input
                  id="company-email"
                  defaultValue={companyInfo.email}
                  type="email"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowEditCompanyDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowEditCompanyDialog(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
