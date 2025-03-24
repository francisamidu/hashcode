import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { Link, useLocation } from '@tanstack/react-router'
import Logo from './Logo'

export default function AuthNavbar() {
  const location = useLocation()
  const isSignup = location.pathname.includes('signup')
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 py-4 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Logo />
            </motion.div>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {isSignup ? (
            <Link
              to="/auth/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log in
            </Link>
          ) : (
            <Link
              to="/auth/signup"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Signup
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

function NavItem({
  text,
  hasDropdown = false
}: {
  text: string
  hasDropdown?: boolean
}) {
  return (
    <motion.div className="relative inline-block" whileHover={{ y: -1 }}>
      <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
        {text}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </button>
    </motion.div>
  )
}
