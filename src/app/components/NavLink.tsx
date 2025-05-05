import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export interface NavLinkPropTypes {
    name: string;
    path: string;
    icon?: string;
  }

const NavLink = ({ name, path, icon }: NavLinkPropTypes) => {

  return (
    <li className='p-2 transition duration-300 hover:bg-[#E1E1E1] rounded-lg'>
        <Link href={path} className='flex gap-2 items-center transition duration-300 hover:bg-[#E1E1E1]'>
            <Image src={icon} width={20} height={20} alt={name} className='h-[20px] h-[20px]'/>
            <span className='font-normal text-[13px]'>
                {name}
            </span>
        </Link>
    </li>
  )
}

export default NavLink;