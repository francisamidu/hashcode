import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import AnimatedBackground from '@/components/AnimatedBackground'
import AuthNavbar from '@/components/AuthNavbar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import { CheckIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import SocialButton from '@/components/SocialButton'
import { appTypes, benefits } from '@/shared/constants'
import { useAppState } from '@/state/app'

import { SignupSchema, SignupSchemaType } from '@/utils/validation'

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent
})

export default function RouteComponent() {
  const appName = useAppState((state) => state.appName)

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      company: '',
      building: '',
      termsAgreed: false
    }
  })

  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    try {
      console.log(data)
      // Perform signup logic here
    } catch (error) {
      // Handle signup error
      console.error(error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <AuthNavbar />
      <main className="flex-1 py-12">
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
              <h1 className="mb-8 text-3xl font-bold">Build with us</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input
                            id="firstName"
                            placeholder="First name"
                            className="h-10 rounded-sm"
                            {...field}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                      )}
                    />

                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input
                            id="lastName"
                            placeholder="Last name"
                            className="h-10 rounded-sm"
                            {...field}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          className="h-10 rounded-sm"
                          {...field}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Choose a Password"
                          className="h-10 rounded-sm"
                          {...field}
                        />
                        {errors.password && (
                          <p className="text-red-500 text-sm">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="company"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Company"
                          className="h-10 rounded-sm"
                          {...field}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="building"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <div className="space-y-2">
                        <Label htmlFor="building">What are you building?</Label>
                        <Select onValueChange={onChange} value={value}>
                          <SelectTrigger className="h-10 rounded-sm">
                            <SelectValue placeholder="What are you building?" />
                          </SelectTrigger>
                          <SelectContent>
                            {appTypes.map((appType, index) => (
                              <SelectItem key={index} value={appType.value}>
                                {appType.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.building && (
                          <p className="text-red-500 text-sm">
                            {errors.building.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="termsAgreed"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <div className="flex items-start space-x-2 pt-2">
                        <Checkbox
                          id="terms"
                          checked={value}
                          onCheckedChange={onChange}
                        />
                        <label
                          htmlFor="terms"
                          className="text-xs text-gray-600"
                        >
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
                    )}
                  />

                  <div>
                    <Button
                      type="submit"
                      className="w-full rounded-sm bg-gray-300 hover:bg-gray-400"
                      variant="secondary"
                      disabled={isSubmitting}
                    >
                      Create account
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Existing benefits section remains unchanged */}
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
      </main>
    </div>
  )
}
