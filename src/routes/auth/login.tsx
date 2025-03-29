import React from 'react'
import { motion } from 'motion/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'

import AuthNavbar from '@/components/AuthNavbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import SocialButton from '@/components/SocialButton'
import { Button } from '@/components/ui/button'
import { useAppState } from '@/state/app'
import { LoginSchema, LoginSchemaType } from '@/utils/validation'
import { login as loginFn } from '@/api/auth'
import { handleError } from '@/utils/handleError'
import { useAppForm } from '@/hooks/form'
// import { useAuthStore } from '@/state/auth'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent
})

export default function RouteComponent() {
  const appName = useAppState((state) => state.appName)

  // const { setIsAuthenticated, setUser } = useAuthStore()

  // const login = useMutation({
  //   mutationFn: loginFn
  // })

  const { Field, Subscribe } = useAppForm({
    defaultValues: {
      email: '',
      password: ''
    },
    validators: {
      onChange: LoginSchema
    },
    onSubmit: async (s) => {
      console.log(s)
      // login.mutate(data, {
      //   onError: async (error) => {
      //     const err = handleError(error)
      //     toast.error(err.message)
      //   },
      //   onSuccess: async (response) => {
      //     // setUser({
      //     //   ...response.user,
      //     //   accessToken: response.accessToken,
      //     //   refreshToken: response.refreshToken,
      //     //   isVerified: response.user.isVerified
      //     // })
      //     // setIsAuthenticated(true)
      //     toast.success('Logged in')
      //   }
      // })
    }
  })

  // <AppField> -

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <AuthNavbar />
      <div className="flex flex-1 items-center justify-center py-12">
        <form>
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

              <Field
                name="email"
                children={({ state, handleChange, handleBlur }) => (
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={state.value}
                      onChange={(e) => handleChange(e.target.value)}
                      onBlur={handleBlur}
                      className="h-10 rounded-sm"
                    />
                  </div>
                )}
              />

              <Field
                name="password"
                children={({ state, handleChange, handleBlur }) => (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password">Password</label>
                      <Link
                        to="/"
                        className="text-xs font-medium text-blue-600 hover:text-blue-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={state.value}
                      onChange={(e) => handleChange(e.target.value)}
                      onBlur={handleBlur}
                      className="h-10 rounded-sm"
                    />
                  </div>
                )}
              />

              <Subscribe
                selector={(state) => state.canSubmit}
                children={(canSubmit) => (
                  <Button
                    type="submit"
                    className="w-full rounded-sm"
                    disabled={!canSubmit}
                  >
                    Log in
                  </Button>
                )}
              />
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
