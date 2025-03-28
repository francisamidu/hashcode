'use client'
import { Crown, ChevronDown, User, Settings, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useNavigate } from '@tanstack/react-router'
import { UserCardProps } from '@/types/dashboard'
import avatar from '@/assets/avatar.svg'
import { useAuthStore } from '@/state/auth'
import { useEffect } from 'react'
import { IUserProfileRole } from '@/types/user'

const UserCard = ({ username, transactionCount, onClick }: UserCardProps) => {
  const navigate = useNavigate()

  const handleMenuAction = (action: string) => {
    switch (action) {
      case 'profile':
        navigate({ to: '/dashboard/profile' })
        break
      case 'settings':
        navigate({ to: '/dashboard/settings' })
        break
      case 'logout':
        // Implement logout logic
        console.log('Logging out')
        break
    }
  }

  const { setUser, user } = useAuthStore((store) => store)

  useEffect(() => {
    if (!user) {
      setUser({
        email: 'francis@awk.com',
        id: '123',
        isVerified: true,
        userAccountRoleType: IUserProfileRole.Developer,
        username: 'francis'
      })
    }
    console.log(user)
  }, [])

  return (
    <DropdownMenu>
      <div
        className="rounded-md bg-gray-50 p-1 flex items-center justify-between border border-gray-100 hover:bg-gray-100 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center">
          <div className="mr-2 px-3 py-2">
            <img src={avatar} alt="Avatar image" className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium">{username}</p>
            <p className="text-xs text-gray-500">
              {transactionCount.toLocaleString()} Transactions
            </p>
          </div>
        </div>
        <DropdownMenuTrigger asChild>
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronDown size={16} />
          </button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleMenuAction('profile')}
          className="cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleMenuAction('settings')}
          className="cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleMenuAction('logout')}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserCard
