import { useEffect } from 'react'
import { motion } from 'motion/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import AuthNavbar from '@/components/AuthNavbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import SocialButton from '@/components/SocialButton'
import { useAppState } from '@/state/app'

import { LoginSchema, LoginSchemaType } from '@/utils/validation'
import { useMutation } from '@tanstack/react-query'
import { login as loginFn } from '@/api/auth'
import { handleError } from '@/utils/handleError'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent
})

export default function RouteComponent() {
  const appName = useAppState((state) => state.appName)

  const login = useMutation({
    mutationFn: loginFn
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  })

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    login.mutate(data, {
      onError: async (error) => {
        const err = handleError(error)
        toast.error(err.message)
      },
      onSuccess: async () => {
        toast.success('Logged in')
      }
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <AuthNavbar />
      <main className="flex flex-1 items-center justify-center py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {/* Social Buttons */}
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

              {/* Or divider */}
              <div className="relative my-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300">
                <span className="before:absolute before:left-0 before:w-1/4 before:border-t before:border-gray-300 before:top-1/2 before:transform before:-translate-y-1/2 dark:before:border-gray-600"></span>
                <span className="px-4">or Continue with Email</span>
                <span className="after:absolute after:right-0 after:w-1/4 after:border-t after:border-gray-300 after:top-1/2 after:transform after:-translate-y-1/2 dark:after:border-gray-600"></span>
              </div>

              {/* Email Field */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...field}
                      className="h-10 rounded-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
              />

              {/* Password Field */}
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
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
                      {...field}
                      className="h-10 rounded-sm"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                )}
              />

              {/* Remember Me Checkbox */}
              <Controller
                name="rememberMe"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={value}
                      onCheckedChange={onChange}
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                )}
              />

              {/* Submit Button */}
              <div>
                <Button
                  className="w-full rounded-sm"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Log in
                </Button>
              </div>
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
      </main>
    </div>
  )
}
