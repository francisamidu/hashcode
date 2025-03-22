import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Hash } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import Logo from './Logo'

export default function NotFound() {
  const [randomHashes, setRandomHashes] = useState<string[]>([])
  const [decodedHash, setDecodedHash] = useState<string | null>(null)

  // Generate random hash-like strings
  useEffect(() => {
    const generateRandomHash = () => {
      const chars = '0123456789abcdef'
      let hash = ''
      for (let i = 0; i < 32; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)]
      }
      return hash
    }

    const hashes = Array.from({ length: 15 }, () => generateRandomHash())
    setRandomHashes(hashes)

    // Simulate decoding animation
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * hashes.length)
      setDecodedHash(hashes[randomIndex])

      setTimeout(() => {
        setDecodedHash(null)
      }, 1000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* Background hash pattern */}
      <div className="fixed inset-0 overflow-hidden opacity-5 select-none pointer-events-none">
        <div className="absolute inset-0 flex flex-wrap content-start">
          {randomHashes.map((hash, index) => (
            <div
              key={index}
              className={`text-xs font-mono p-2 ${hash === decodedHash ? 'text-indigo-600 font-bold' : ''}`}
              style={{
                transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            >
              {hash}
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex items-center">
          <Logo />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
            <Hash className="h-12 w-12 text-indigo-600" />
          </div>

          <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hash Not Found
          </h2>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-6">
              We couldn't decode this hash. The page you're looking for doesn't
              exist or has been moved to another URL.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="default" className="gap-2">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/dashboard">
                  <ArrowLeft className="h-4 w-4" />
                  Go to Dashboard
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Need help?{' '}
            <Link
              to="/dashboard/help"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Contact our support team
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 z-10">
        &copy; {new Date().getFullYear()} Hashcode. All rights reserved.
      </footer>
    </div>
  )
}
