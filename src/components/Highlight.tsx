import React from 'react'

type HighlightProps = {
  text: string
}
const Highlight = ({ text }: HighlightProps) => {
  return (
    <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-semibold mb-6 md:self-start self-center">
      {text}
    </span>
  )
}

export default Highlight
