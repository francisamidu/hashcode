import { Button } from '@/components/ui/button'
import Hero from '@/components/ui/Hero'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Sun, Moon } from 'lucide-react'
import { useState } from 'react'

const Index = () => {
  const [darkMode, toggleDarkMode] = useState(false)
  return (
    <>
      <header>
        <nav className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 font-bold text-2xl flex items-center"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">HC</span>
                </div>
                Hashcode
              </Link>
              <div className="hidden md:flex ml-10 space-x-8">
                <Link
                  to="/features"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/documentation"
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
                className="block w-fit"
                onClick={() => toggleDarkMode(!darkMode)}
                variant="destructive"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button className="main-button" variant="default">
                Try it for free
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <Hero />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  )
}

export const Route = createRootRoute({
  component: Index
})

export default Index
