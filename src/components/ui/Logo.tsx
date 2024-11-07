import { LogoIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";

const Logo: React.FC = ({}) => {
  return (
    <Link
      href={"/"}
      className="flex h-[100px] items-center gap-3 whitespace-nowrap py-6 pl-12"
    >
      <LogoIcon />
      <h2 className="text-3xl font-extrabold">Soar Task</h2>
    </Link>
  );
};

export default Logo;
