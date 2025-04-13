import { OtpParams } from '@/types/otpParams'
export const selectLocationState = (state: any): OtpParams => {
  return {
    email: state.search?.email,
    otp: state.search?.otp
  }
}
