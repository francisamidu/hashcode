import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'
import { CheckIcon } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'

import AnimatedBackground from '@/components/AnimatedBackground'
import AuthNavbar from '@/components/AuthNavbar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import SocialButton from '@/components/SocialButton'
import { benefits } from '@/shared/constants'
import { signup as signupFn } from '@/api/auth'
import { handleError } from '@/utils/handleError'
import { useSignupForm } from '@/hooks/form'
import { useAppState } from '@/state/app'

function RouteComponent() {
  const { appName } = useAppState()

  const navigate = useNavigate()

  const signup = useMutation({
    mutationFn: signupFn
  })

  const {
    formState,
    handleChange,
    isComplete,
    isValid,
    resetForm,
    validateForm
  } = useSignupForm()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    validateForm()
    console.log(`Form complete: ${isComplete}`)
    if (isValid) {
      signup.mutate(
        {
          email: formState.email,
          password: formState.password,
          businessName: formState.businessName,
          firstName: formState.firstName,
          lastName: formState.lastName
        },
        {
          onError: async (error) => {
            console.log(error)
            const err = handleError(error)
            toast.error(err.message)
          },
          onSuccess: async (_response) => {
            navigate({
              to: '/auth/verify-otp',
              params: { email: formState.email}
            })
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
    <main className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <AuthNavbar />
      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h1 className="mb-8 text-3xl font-bold">Build with us</h1>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 rounded-lg border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
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

                    <div className="relative my-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300">
                      <span className="before:absolute before:left-0 before:w-1/4 before:border-t before:border-gray-300 before:top-1/2 before:transform before:-translate-y-1/2 dark:before:border-gray-600"></span>
                      <span className="px-4">or Continue with Email</span>
                      <span className="after:absolute after:right-0 after:w-1/4 after:border-t after:border-gray-300 after:top-1/2 after:transform after:-translate-y-1/2 dark:after:border-gray-600"></span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          className="h-10 rounded-sm"
                          value={formState.firstName}
                          onChange={handleChange('firstName')}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          className="h-10 rounded-sm"
                          value={formState.lastName}
                          onChange={handleChange('lastName')}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="h-10 rounded-sm"
                        value={formState.email}
                        onChange={handleChange('email')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Choose a Password"
                        className="h-10 rounded-sm"
                        value={formState.password}
                        onChange={handleChange('password')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Company/Business name"
                        className="h-10 rounded-sm"
                        value={formState.businessName}
                        onChange={handleChange('businessName')}
                      />
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-xs text-gray-600">
                        I agree to {appName}'s{' '}
                        <Link
                          to="/"
                          className="text-gray-900 underline underline-offset-2"
                        >
                          Terms of Use
                        </Link>{' '}
                        and consent to {appName}'s{' '}
                        <Link
                          to="/"
                          className="text-gray-900 underline underline-offset-2"
                        >
                          Privacy Statement
                        </Link>
                        .
                      </label>
                    </div>

                    <div>
                      <Button
                        type="submit"
                        className="w-full rounded-sm bg-gray-600 hover:bg-black text-white"
                        variant="secondary"
                      >
                        Create account
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-start mt-16"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-6 rounded-lg backdrop-blur-sm">
                <h2 className="mb-4 text-sm font-medium">
                  By creating a free account, you can:
                </h2>
                <ul className="space-y-5 mt-3 ">
                  {benefits.map((benefit, index) => (
                    <li className="flex items-start" key={index}>
                      <CheckIcon className="mr-2 mt-0.5 h-4 w-4 text-indigo-400" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm">
                  Have questions?{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/" className="underline">
                      Contact sales
                    </Link>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent
})
