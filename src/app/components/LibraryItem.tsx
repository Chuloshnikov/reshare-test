import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LibraryItem = ({
  icon,
  name,
  date,
  avatar,
  id,
}: {
  icon: string;
  name: string;
  date: string;
  avatar: string;
  id: number;
}) => {
  return (
    <Link
      href={`/${id}`}
      className="group flex justify-between items-center p-3 hover:bg-[#F1F1F1] transition-colors duration-200"
    >
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-[6px] border-[#D2D5DA] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
        <Image
          src={icon}
          width={20}
          height={20}
          alt="folder icon"
          className="h-[20px] w-[20px]"
        />
        <h5 className="font-normal text-[13px] text-[#333333]">{name}</h5>
      </div>
      <div className="flex gap-3 items-center">
        <span className="font-normal text-[13px] text-[#777777]">{date}</span>
        <Image
          src={avatar}
          width={20}
          height={20}
          alt="avatar"
          className="h-[20px] w-[20px] rounded-full"
        />
        <Image
          src="/ChevronRight.png"
          width={20}
          height={20}
          alt="chevron right"
          className="h-[20px] w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </div>
    </Link>
  );
};

export default LibraryItem;