import Image from "next/image";

const UploadButton = ({padY, padX, gaps}: {padY: string, padX: string, gaps: string}) => {
  return (
    <button className={`bg-[#333333] flex ${gaps} items-center justify-center ${padY} ${padX} max-w-max rounded-lg cursor-pointer`}>
        <Image src="/plus.svg" width={20} height={20} alt="Logo" className="w-[20px] h-[20px]"/>
        <span className="font-medium text-sm leading-5 tracking-normal text-white">Upload</span>
    </button>
  )
}

export default UploadButton;