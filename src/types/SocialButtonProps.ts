export type SocialButtonProps = {
  socialType: 'google' | 'facebook' | 'linkedln' | 'twitter'
  callback: () => void
  className?: string
}
