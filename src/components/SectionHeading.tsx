import React from 'react'

type SectionHeadingProps = {
  textNormal: string
  textStripped: string
}
const SectionHeading = ({ textNormal, textStripped }: SectionHeadingProps) => {
  return (
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 text-center sm:text-start sm:text-4xl">
      {textNormal}{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
        {textStripped}
      </span>
    </p>
  )
}

export default SectionHeading
