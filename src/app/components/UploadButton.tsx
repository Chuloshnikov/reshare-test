import Image from "next/image";

const UploadButton = () => {
  return (
    <button className="bg-[#333333] flex gap-2 items-center justify-center py-2 px-3 max-w-max rounded-lg cursor-pointer">
        <Image src="/plus.svg" width={50} height={50} alt="Logo" className="w-[10px] h-[10px]"/>
        <span className="font-medium text-sm leading-5 tracking-normal text-white">Upload</span>
    </button>
  )
}

export default UploadButton;