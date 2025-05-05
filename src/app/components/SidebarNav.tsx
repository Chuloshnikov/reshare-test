import { navLinksUp, navLinksDown } from "../lib/constants";
import NavLink from "./NavLink";


const SidebarNav = () => {
  return (
    <nav className="flex flex-col justify-between h-full">
        <ul className='text-[#333333]'>
        {navLinksUp.map(({ name, path, icon }) => (
        <NavLink
          key={path}
          path={path}
          name={name}
          icon={icon}
        />
      ))}
        </ul>
        <ul>
        {navLinksDown.map(({ name, path, icon }) => (
        <NavLink
          key={path}
          path={path}
          name={name}
          icon={icon}
        />
        ))}
        </ul>
    </nav>
  )
}

export default SidebarNav;