import React from 'react'
const ErrorFallback = ({ error }: { error: Error }) => {
  console.log({ error })
  return (
    <div role="alert" className="p-4 text-red-600">
      <p className="font-bold">Something went wrong:</p>
      <pre className="text-sm">{error.message}</pre>
    </div>
  )
}
export default ErrorFallback
