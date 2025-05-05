import Image from 'next/image';
import React from 'react'

const SearchInput = () => {
  return (
    <form className='bg-[#F1F1F1] rounded-xl cursor-pointer flex gap-2 p-2 mr-3 my-3 w-[240px]'>
        <Image src='/Search.svg' width={20} height={20} alt="search icon" className='h-[20px] w-[20px]'/>
        <input type="search" placeholder='Search in Reshare...' className='text-[13px]'/>
    </form>
  )
}

export default SearchInput;