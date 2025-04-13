import React from 'react'
import { motion } from 'motion/react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'

import AuthNavbar from '@/components/AuthNavbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import SocialButton from '@/components/SocialButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { login as loginFn } from '@/api/auth'
import { handleError } from '@/utils/handleError'

import { useAuthStore } from '@/state/auth'
import { useLoginForm } from '@/hooks/form'
import { useAppState } from '@/state/app'
import { IResponseMessage } from '@/types/app'
import { IUserProfileRole } from '@/types/user'

function RouteComponent() {
  const { setIsAuthenticated, setUser } = useAuthStore()
  const navigate = useNavigate()

  const { appName } = useAppState()

  const { formState, handleChange, isValid, resetForm, validateForm } =
    useLoginForm()

  const login = useMutation({
    mutationFn: loginFn
  })
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const values = validateForm()
    if (isValid) {
      login.mutate(
        {
          email: formState.email,
          password: formState.password
        },
        {
          onError: async (error) => {
            console.log(error)
            const err = handleError(error)
            toast.error(err.message)
          },
          onSuccess: async (response) => {
            const message = response.message.toString()

            if (response.status != 200) {
              toast.error(message)
              setTimeout(() => {
                if (response.message === IResponseMessage.NOT_VERIFIED) {
                  navigate({
                    to: `/auth/verify-otp?email=${formState.email}`
                  })
                }
              }, 3000)
            } else {
              const { data } = response
              toast.success('Logged in')
              setUser({
                id: data.userId,
                email: formState.email,
                userAccountRoleType: IUserProfileRole.Owner,
                username: '',
                token: data.token,
                refreshToken: data.refreshToken,
                isVerified: false
              })
              setIsAuthenticated(true)
            }
            resetForm()
          }
        }
      )
    } else {
      toast.error(
        () => (
          <div>
            <h4 className="font-bold mb-2">Form Validation Errors</h4>
            <ul className="list-disc list-inside">
              {Object.values(formState.errors).map((message, index) => (
                <li key={index} className="text-sm">
                  {message}
                </li>
              ))}
            </ul>
          </div>
        ),
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        }
      )
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <AuthNavbar />
      <div className="flex flex-1 items-center justify-center py-12">
        <form onSubmit={handleSubmit}>
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
                  type="email"
                  className="h-10 rounded-sm"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={handleChange('email')}
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
                  type="password"
                  className="h-10 rounded-sm"
                  value={formState.password}
                  onChange={handleChange('password')}
                  placeholder="Enter your password"
                />
              </div>

              <Button type="submit" className="w-full rounded-sm">
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
                By logging in, you agree to {appName}'s{' '}
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
        </form>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent
})
