import React from "react";
import Logo from "../ui/Logo";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <aside className="w-[260px] bg-red-100">
      <Logo />
    </aside>
  );
};

export default Sidebar;
