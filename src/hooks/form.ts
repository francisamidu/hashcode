import { LoginFormState, OtpFormState, SignupFormState } from '@/types/auth'
import { LoginSchema, OtpSchema, SignupSchema } from '@/utils/validation'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useEffect, useState } from 'react'
import { z } from 'zod'

// Custom hook for login form management
export function useLoginForm() {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    errors: {}
  })

  // Update field value
  const handleChange =
    (field: keyof LoginFormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: e.target.value,
        errors: {
          ...prev.errors,
          [field]: undefined // Clear error when typing
        }
      }))
      validateForm()
    }

  // Validate form
  const validateForm = () => {
    try {
      // Validate entire form
      LoginSchema.parse({
        email: formState.email,
        password: formState.password
      })

      // Clear any existing errors
      setFormState((prev) => ({ ...prev, errors: {} }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Transform Zod errors into our error format
        const fieldErrors = error.errors.reduce((acc, curr) => {
          const path = curr.path[0] as keyof LoginFormState
          return {
            ...acc,
            [path]: curr.message
          }
        }, {})

        // Update state with validation errors
        setFormState((prev) => ({
          ...prev,
          errors: fieldErrors
        }))
      }

      return formState.errors
    }
  }

  // Reset form
  const resetForm = () => {
    setFormState({
      email: '',
      password: '',
      errors: {}
    })
  }

  return {
    formState,
    handleChange,
    resetForm,
    validateForm,
    isValid: Object.keys(formState.errors).length === 0
  }
}

// Custom hook for login form management
export function useOtpForm() {
  const [formState, setFormState] = useState<OtpFormState>({
    otp: [''],
    errors: {}
  })

  // Update field value
  const handleChange =
    (field: keyof OtpFormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: e.target.value,
        errors: {
          ...prev.errors,
          [field]: undefined // Clear error when typing
        }
      }))
      validateForm()
    }

  // Validate form
  const validateForm = () => {
    try {
      // Validate entire form
      OtpSchema.parse({
        otp: formState.otp
      })

      // Clear any existing errors
      setFormState((prev) => ({ ...prev, errors: {} }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Transform Zod errors into our error format
        const fieldErrors = error.errors.reduce((acc, curr) => {
          const path = curr.path[0] as keyof LoginFormState
          return {
            ...acc,
            [path]: curr.message
          }
        }, {})

        // Update state with validation errors
        setFormState((prev) => ({
          ...prev,
          errors: fieldErrors
        }))
      }

      return formState.errors
    }
  }

  // Reset form
  const resetForm = () => {
    setFormState({
      otp: [''],
      errors: {}
    })
  }

  return {
    formState,
    handleChange,
    resetForm,
    validateForm,
    isValid: Object.keys(formState.errors).length === 0
  }
}

// Custom hook for signup form management
export function useSignupForm() {
  const [formState, setFormState] = useState<SignupFormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    businessName: '',

    errors: {}
  })

  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    const isValid = Object.keys(formState.errors).length === 0
    setIsValid(isValid)
  }, [formState])

  // Update field value for text inputs
  const handleChange =
    (field: keyof SignupFormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement> // Allow boolean for checkbox
    ) => {
      const value = e instanceof Object ? e.target.value : e

      setFormState((prev) => ({
        ...prev,
        [field]: value,
        errors: {
          ...prev.errors,
          [field]: undefined // Clear error when typing
        }
      }))
      validateForm()
    }
  // Handle checkbox changes
  const handleCheckboxChange =
    (field: keyof SignupFormState) => (checked: CheckedState) => {
      setFormState((prev) => ({
        ...prev,
        [field]: checked === true, // Convert CheckedState to boolean
        errors: {
          ...prev.errors,
          [field]: undefined
        }
      }))
      validateForm()
      console.log(formState.errors)
    }
  // Validate form
  const validateForm = () => {
    try {
      // Validate entire form
      SignupSchema.parse({
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        businessName: formState.businessName
      })

      // Clear any existing errors
      setFormState((prev) => ({ ...prev, errors: {} }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.errors)
        // Transform Zod errors into our error format
        const fieldErrors = error.errors.reduce((acc, curr) => {
          const path = curr.path[0] as keyof SignupFormState
          return {
            ...acc,
            [path]: curr.message
          }
        }, {})

        // Update state with validation errors
        setFormState((prev) => ({
          ...prev,
          errors: fieldErrors
        }))
      }

      return formState.errors
    }
  }

  // Reset form
  const resetForm = () => {
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      businessName: '',
      errors: {}
    })
  }

  // Check if all required fields are filled
  const isComplete = () => {
    return (
      formState.firstName &&
      formState.lastName &&
      formState.email &&
      formState.password &&
      formState.businessName
    )
  }

  return {
    formState,
    handleChange,
    handleCheckboxChange,
    resetForm,
    validateForm,
    isValid,
    isComplete: isComplete()
  }
}
