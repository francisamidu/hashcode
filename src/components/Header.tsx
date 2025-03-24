import { Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Link, useNavigate } from '@tanstack/react-router'
import Logo from './Logo'

const Header = () => {
  const [darkMode, toggleDarkMode] = useState(false)
  const navigate = useNavigate()
  const goToSignup = () =>
    navigate({
      to: '/auth/signup'
    })
  return (
    <header>
      <nav className="container mx-auto p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Features
              </a>
              <Link
                to="/dashboard/Documentation"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Documentation
              </Link>
              <Link
                to="/developers"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Developers
              </Link>
            </div>
          </div>
          <div className="flex justify-between flex-row items-center">
            <Button
              className="block w-fit hover:bg-transparent mr-1"
              onClick={() => toggleDarkMode(!darkMode)}
              variant="ghost"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              className="main-button"
              variant="default"
              onClick={goToSignup}
            >
              Try it for free
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
