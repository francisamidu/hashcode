import React from 'react'

type HighlightProps = {
  icon?: JSX.Element
  text: string
}
const Highlight = ({ icon, text }: HighlightProps) => {
  return (
    <div className="py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-semibold mb-6 md:self-start self-center inline-flex flex-row justify-center items-center">
      {icon}
      {text}
    </div>
  )
}

export default Highlight
