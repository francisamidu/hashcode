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
import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import SocialButton from '@/components/SocialButton'

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent
})

export default function RouteComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    building: '',
    termsAgreed: false
  })

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const {
      firstName,
      lastName,
      email,
      password,
      company,
      building,
      termsAgreed
    } = formData
    setIsFormValid(
      firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        password.trim() !== '' &&
        company.trim() !== '' &&
        building !== '' &&
        termsAgreed
    )
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAgreed: checked }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, building: value }))
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
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="h-10 rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="h-10 rounded-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="h-10 rounded-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Choose a Password"
                    className="h-10 rounded-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="h-10 rounded-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="building">What are you building?</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="h-10 rounded-sm">
                      <SelectValue placeholder="What are you building?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fintech-app">Fintech App</SelectItem>
                      <SelectItem value="payment-solution">
                        Payment Solution
                      </SelectItem>
                      <SelectItem value="banking-integration">
                        Banking Integration
                      </SelectItem>
                      <SelectItem value="personal-finance">
                        Personal Finance Tool
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAgreed}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to Plaid's{' '}
                    <Link
                      to="/"
                      className="text-gray-900 underline underline-offset-2"
                    >
                      Terms of Use
                    </Link>{' '}
                    and consent to Plaid's{' '}
                    <Link
                      to="/"
                      className="text-gray-900 underline underline-offset-2"
                    >
                      Privacy Statement
                    </Link>
                    .
                  </label>
                </div>

                <Button
                  className="w-full rounded-sm bg-gray-300 hover:bg-gray-400"
                  variant="secondary"
                  disabled={!isFormValid}
                >
                  Create account
                </Button>
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
                  <BenefitItem text="Access our M-Pesa data transformation APIs, which convert hashed MSISDNs into clear phone numbers" />
                  <BenefitItem text="Use sample data to test our decoding services in our secure sandbox environment" />
                  <BenefitItem text="Process up to 100,000 real transaction records when you're ready to integrate with your business systems" />
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

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <CheckIcon className="mr-2 mt-0.5 h-4 w-4 text-indigo-400" />
      <span className="text-sm text-gray-600">{text}</span>
    </li>
  )
}
