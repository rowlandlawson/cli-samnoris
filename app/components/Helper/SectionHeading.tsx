import React from 'react'

type Props = {
    heading: string;
    subheading: string;
}
const SectionHeading = ({heading, subheading}: Props) => {
  return (
    <div className='w-[80%] mx-auto flex flex-col items-center'>
        <h1 className='text-xl sm:text-3xl text-[#C89F65] font-bold'>{heading}</h1>
        <p className='mt-2 text-[#111111] sm:text-base text-sm font-medium'>{subheading}</p>
    </div>
  )
}

export default SectionHeading;