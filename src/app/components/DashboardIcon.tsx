import Image from "next/image";
import { systemIcons } from "../lib/constants";


const DashboardIcon = ({ icon }: {icon: string}) => {

    function iconRender(icon: string) {
        switch (icon) {
            case "search":
                return <Image src={systemIcons.boldsearch} width={20} height={20} alt="bold search icon" className="h-[20px] w-[20px]"/>;
            case "folder":
                return <Image src={systemIcons.folderplas} width={20} height={20} alt="folder plus icon" className="h-[20px] w-[20px]"/>;
            default:
                return null;
        }  
    }
    
  return (
    <div className="bg-[#F1F1F1] p-1 rounded-lg cursor-pointer">
        {iconRender(icon)}
    </div>
  )
}

export default DashboardIcon;