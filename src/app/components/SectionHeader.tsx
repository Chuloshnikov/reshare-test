import React from 'react'

const SectionHeader = ({ title }: {title: string}) => {
  return (
    <div className=''>
        <h3 className='font-medium text-base'>{title}</h3>
    </div>
  )
}

export default SectionHeader;