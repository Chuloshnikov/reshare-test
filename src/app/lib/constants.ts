

export interface NavLink {
  name: string;
  path: string;
  icon: string;
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
