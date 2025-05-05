import Link from 'next/link';
import React from 'react'

const SidebarNav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/"/>
            </li>
        </ul>
    </nav>
  )
}

export default SidebarNav;