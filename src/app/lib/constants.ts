

export interface NavLink {
  name: string;
  path: string;
  icon: string;
}

export interface LibraryDataProps {
  name: string;
  icon: string;
  date: string;
  avatar: string;
  id: number;
}

export const navLinksUp: NavLink[] = [
  { name: "Library", path: "/", icon: "/foldericon.svg" },
  { name: "Data rooms", path: "/data-rooms", icon: "/shieldicon.svg" },
  { name: "Visitors", path: "/visitors", icon: "/usericon.svg" },
];

export const navLinksDown: NavLink[] = [
    { name: "Invite", path: "/invite", icon: "/mailicon.svg" },
    { name: "Settings", path: "/settings", icon: "/settingsicon.svg" },
    { name: "Marcielle Enrique", path: "/profile", icon: "/Avatar.png" },
  ];

  export const systemIcons = {
    boldsearch: "./boldsearch.svg",
    folderplas: "./folderplus.svg"
  } 


  export const LibraryVisitedData: LibraryDataProps[] = [
    { icon: "/colorfolder.png", name: "AI", id: 1, date: "May 27, 2025", avatar: "/Avatar.png" },
    { icon: "/3d.png", name: "Key Account Plans", id: 2, date: "May 26, 2025", avatar: "/Avatar.png" },
    { icon: "/mp4.png", name: "Series B", id: 3, date: "May 24, 2025", avatar: "/Avatar.png" },    
  ];

  export const LibraryAllData: LibraryDataProps[] = [
    { icon: "/colorfolder.png", name: "Media Kit", id: 1, date: "May 30, 2025", avatar: "/Avatar.png" },
    { icon: "/colorfolder.png", name: "Sales", id: 2, date: "May 29, 2025", avatar: "/Avatar.png" },
    { icon: "/colorfolder.png", name: "Investors", id: 3, date: "May 28, 2025", avatar: "/Avatar.png" },
    { icon: "/png.png", name: "Sales Playbook v3.1", id: 2, date: "May 25, 2025", avatar: "/Avatar.png" },
    { icon: "/colorfolder.png", name: "AI", id: 1, date: "May 27, 2025", avatar: "/Avatar.png" },
    { icon: "/3d.png", name: "Key Account Plans", id: 2, date: "May 25, 2025", avatar: "/Avatar.png" },
    { icon: "/mp4.png", name: "Series B", id: 3, date: "May 24, 2025", avatar: "/Avatar.png" },    
  ];
