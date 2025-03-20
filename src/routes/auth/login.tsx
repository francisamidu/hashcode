import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import AuthNavbar from '@/components/AuthNavbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import SocialButton from '@/components/SocialButton'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent
})

export default function RouteComponent() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const { email, password } = formData
    setIsFormValid(email.trim() !== '' && password.trim() !== '')
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <AuthNavbar />
      <main className="flex flex-1 items-center justify-center py-12">
        <motion.div
          className="w-full max-w-md px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 text-center">
            <motion.h1
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Log in to your account
            </motion.h1>
            <motion.p
              className="mt-2 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Don't have an account?{' '}
              <Link
                to="/auth/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </motion.p>
          </div>

          <motion.div
            className="space-y-4 rounded-lg border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-center justify-center my-4 gap-4">
              <SocialButton
                className="block !rounded-sm !w-full"
                socialType="google"
                callback={() => {}}
              />
              <SocialButton
                className="block !rounded-sm !w-full"
                socialType="facebook"
                callback={() => {}}
              />
            </div>

            <div className="relative my-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300">
              <span className="before:absolute before:left-0 before:w-1/4 before:border-t before:border-gray-300 before:top-1/2 before:transform before:-translate-y-1/2 dark:before:border-gray-600"></span>
              <span className="px-4">or Continue with Email</span>
              <span className="after:absolute after:right-0 after:w-1/4 after:border-t after:border-gray-300 after:top-1/2 after:transform after:-translate-y-1/2 dark:after:border-gray-600"></span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-10 rounded-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/"
                  className="text-xs font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-10 rounded-sm"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={handleCheckboxChange}
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>

            <Button className="w-full rounded-sm" disabled={!isFormValid}>
              Log in
            </Button>
          </motion.div>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xs text-gray-600">
              By logging in, you agree to Plaid's{' '}
              <Link
                to="/"
                className="text-gray-900 underline underline-offset-2"
              >
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link
                to="/"
                className="text-gray-900 underline underline-offset-2"
              >
                Privacy Statement
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
