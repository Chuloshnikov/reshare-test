import Image from "next/image";
import UploadButton from "./UploadButton";


const Sidebar = () => {
  return (
    <div className='bg-[#F1F1F1] w-[280px] h-screen flex flex-col p-4'>
        <Image src="/logo.svg" width={100} height={100} alt="Logo" className="w-[72px] h-[32px] mb-4"/>
        <UploadButton/>
    </div>
  )
}

export default Sidebar;