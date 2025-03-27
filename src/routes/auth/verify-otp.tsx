import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ArrowLeft, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { Link, useNavigate } from '@tanstack/react-router'
import Logo from '@/components/Logo'
import VerificationImage from '@/assets/verification-otp.svg'

export const Route = createFileRoute('/auth/verify-otp')({
  component: RouteComponent
})

function RouteComponent() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer for OTP expiration
  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true)
    }
  }, [timeLeft, canResend])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.substring(0, 1)
    setOtp(newOtp)

    // Clear any previous errors
    if (error) setError(null)

    // Auto-focus next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle key down events for navigation between inputs
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Focus previous input when backspace is pressed on an empty input
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowLeft' && index > 0) {
      // Navigate left
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < 5) {
      // Navigate right
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text/plain').trim()

    // Check if pasted content is a valid OTP (numbers only)
    if (!/^\d+$/.test(pastedData)) return

    const pastedOtp = pastedData.substring(0, 6).split('')
    const newOtp = [...otp]

    for (let i = 0; i < pastedOtp.length; i++) {
      if (i < 6) {
        newOtp[i] = pastedOtp[i]
      }
    }

    setOtp(newOtp)

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((val) => val === '')
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[5]?.focus()
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const otpValue = otp.join('')

    // Validate OTP
    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits of the OTP')
      return
    }

    setIsVerifying(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, let's say 123456 is a valid OTP
      if (otpValue === '123456') {
        setSuccess(true)
        // Redirect after successful verification
        setTimeout(() => {
          navigate({
            to: '/dashboard'
          })
        }, 1500)
      } else {
        setError('Invalid verification code. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  // Handle resend OTP
  const handleResend = async () => {
    setCanResend(false)
    setTimeLeft(60)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Clear inputs
    setOtp(Array(6).fill(''))
    setError(null)

    // Focus first input
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center b-4">
          <Logo />
        </div>

        <Card className="border-slate-200 shadow-lg mt-5">
          <CardHeader className="space-y-1">
            <div className="relative flex items-center justify-center">
              <Link
                to="/auth/login"
                className="absolute top-1/4 left-0 text-slate-500 hover:text-indigo-600 mr-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <CardTitle className="text-2xl font-bold !justify-self-center">
                Verify Your Account
              </CardTitle>
            </div>
            <div className="flex justify-center my-3">
              <img
                src={VerificationImage}
                alt="Verification"
                className="h-24 w-24"
              />
            </div>
            <CardDescription className="text-center">
              An email with a 6-digit code sent to fra*****24.com. Enter it
              below to complete the signup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="bg-green-50 text-green-800 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      Verification successful! Redirecting...
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex justify-center">
                  <div className="flex gap-2">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="\d{1}"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        className="h-14 w-12 text-center text-xl font-semibold border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                        disabled={isVerifying || success}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center text-sm text-slate-500">
                  {!canResend ? (
                    <p>Resend code in {formatTime(timeLeft)}</p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Resend verification code
                    </button>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={
                  otp.some((digit) => digit === '') || isVerifying || success
                }
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Verified
                  </>
                ) : (
                  'Verify'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm text-slate-500">
              Incorrect email?{' '}
              <Link
                to="/support"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Change email
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
