"use client";
import { GearIcon, NotificationIcon, SearchIcon } from "@/assets/icons";
import React from "react";
import { Input } from "../ui/Input";
import Image from "next/image";
import MobileDialog from "../sidebar/MobileDialog";
import { usePathname } from "next/navigation";
import { routesMap } from "@/lib/helpers";

const Navbar: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <header className="flex min-h-[100px] w-full flex-grow flex-col justify-center gap-4 bg-white px-6 py-5 pt-7 md:flex-row md:px-8 md:py-0 md:pt-0">
      <nav className="flex w-full items-center justify-between">
        <MobileDialog />
        <h1 className="text-xl font-semibold md:text-3xl">
          {routesMap[pathname] || ""}
        </h1>

        <div className="flex items-center gap-6">
          <Input
            className="hidden md:flex"
            placeholder="Search for something"
            searchIcon={<SearchIcon />}
          />

          <div className="hidden h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F5F7FA] md:flex">
            <GearIcon />
          </div>

          <div className="hidden h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F5F7FA] md:flex">
            <NotificationIcon />
          </div>

          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full md:h-[60px] md:w-[60px]">
            <Image
              src="/images/user.svg"
              alt="user badge"
              height={60}
              width={60}
            />
          </div>
        </div>
      </nav>

      <Input
        className="flex md:hidden"
        placeholder="Search for something"
        searchIcon={<SearchIcon />}
      />
    </header>
  );
};

export default Navbar;
