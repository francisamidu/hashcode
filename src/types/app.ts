export type App = {
  appName: string
}


export interface IApiResponse<T> {
  status:200 | 201 | 400 | 401 | 403| 500
  data:T
  message: IResponseMessage[MessageKey];
}

export enum IResponseMessage{
  ALREADY_EXISTING_ACCOUNT="This email is already in use. Please log in instead.",
  ALREADY_EXISTING_BUSINESS="This business already has an owner. Contact the owner for access.",
  NOT_VERIFIED="Your account has not been verified. Please check your email for a verification code and complete onboarding",
  NOT_REGISTERED="No account found with the provided email address. Please check and try again.",
  NOT_LOGGED_IN="Unauthorized access. Please log in to continue.",
  INVALID_OTP="Invalid OTP. Please check your code and try again.",
  INVALID_PASSWORD="The password you entered is incorrect. Please try again."
}

type MessageKey = keyof IResponseMessage;
