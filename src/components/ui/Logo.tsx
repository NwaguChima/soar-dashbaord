import { LogoIcon } from "@/assets/icons";
import React from "react";

const Logo: React.FC = ({}) => {
  return (
    <div className="flex items-center gap-1 whitespace-nowrap px-5 py-6">
      <LogoIcon />
      <h2 className="text-3xl font-extrabold">Soar Task</h2>
    </div>
  );
};

export default Logo;
