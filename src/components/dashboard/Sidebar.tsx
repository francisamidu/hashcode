import {
  Home,
  BarChart3,
  Users,
  Database,
  CreditCard,
  HelpCircle,
  Settings,
  LockOpen,
  FileText
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Link, useLocation } from '@tanstack/react-router'
import { DashboardLink } from '@/types/dashboard'
import Logo from '../Logo'
import UserCard from './UserCard'

const Sidebar = () => {
  const pathname = useLocation().pathname

  const mainRoutes: DashboardLink[] = [
    {
      active: pathname === '/dashboard',
      icon: <Home size={18} />,
      to: '/dashboard',
      text: 'Home'
    },
    {
      active: pathname === '/dashboard/Decode',
      icon: <LockOpen size={18} />,
      to: '/dashboard/Decode',
      text: 'Decode Hash',
      badge: '24'
    },
    {
      active: pathname === '/dashboard/analytics',
      icon: <BarChart3 size={18} />,
      to: '/dashboard/analytics',
      text: 'Analytics'
    },
    {
      active: pathname === '/dashboard/documentation',
      icon: <FileText size={18} />,
      to: '/dashboard/documentation',
      text: 'Documentation'
    },
    {
      active: pathname === '/dashboard/api-usage',
      icon: <Database size={18} />,
      to: '/dashboard/api-usage',
      text: 'API Usage'
    },
    {
      active: pathname === '/dashboard/billing',
      icon: <CreditCard size={18} />,
      to: '/dashboard/billing',
      text: 'Billing'
    }
  ]

  const preferenceRoutes: DashboardLink[] = [
    {
      active: pathname === '/dashboard/help',
      icon: <HelpCircle size={18} />,
      to: '/dashboard/help',
      text: 'Help and Support'
    },
    {
      active: pathname === '/dashboard/settings',
      icon: <Settings size={18} />,
      to: '/dashboard/settings',
      text: 'Settings'
    }
  ]

  return (
    <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white p-4 md:flex fixed left-0 top-0">
      <div className="mb-2 flex items-center">
        <Link to="..">
          <Logo />
        </Link>
      </div>
      <div className="hover:cursor-pointer my-2">
        <UserCard username="Francis" transactionCount={10} />
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <p className="mb-2 text-xs font-semibold text-gray-500">MAIN MENU</p>
          <nav className="space-y-1">
            {mainRoutes.map((route) => (
              <Link
                key={route.to}
                to={route.to}
                className={`flex items-center rounded-md px-3 py-2 text-sm transition-all duration-150 ${
                  route.active
                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span
                  className={`mr-3 ${route.active ? 'text-indigo-700' : 'text-gray-500'}`}
                >
                  {route.icon}
                </span>
                <span>{route.text}</span>
                {route.badge && (
                  <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                    {route.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-gray-500">
            PREFERENCES
          </p>
          <nav className="space-y-1">
            {preferenceRoutes.map((route) => (
              <Link
                key={route.to}
                to={route.to}
                className={`flex items-center rounded-md px-3 py-2 text-sm ${
                  route.active
                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span
                  className={`mr-3 ${route.active ? 'text-indigo-700' : 'text-gray-500'}`}
                >
                  {route.icon}
                </span>
                <span>{route.text}</span>
                {route.badge && (
                  <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                    {route.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>IV</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Ivan Veniamin</p>
            <p className="text-xs text-gray-500">ivan@hashcode.dev</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
