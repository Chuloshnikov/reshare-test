import Image from "next/image";
import UploadButton from "./UploadButton";
import SidebarNav from "./SidebarNav";


const Sidebar = () => {
  return (
    <div className='bg-[#F1F1F1] w-[280px] h-screen flex flex-col'>
        <div className="px-4 pt-4 pb-3">
            <Image src="/logo.svg" width={100} height={100} alt="Logo" className="w-[72px] h-[32px] mb-4"/>
        </div>
        <div className="px-3 flex flex-col gap-3 flex-1 mb-3">
            <UploadButton />
            <SidebarNav />
        </div>
    </div>
  )
}

export default Sidebar;