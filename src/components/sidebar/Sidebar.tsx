"use client";
import React from "react";
import Logo from "../ui/Logo";
import { sidebarItems } from "@/lib/helpers";
import { SidebarItem } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-[260px] bg-white">
      <Logo />

      <ul className="mt-4">
        {sidebarItems.map((item: SidebarItem) => {
          const isActive = pathname === item.href;

          return (
            <li
              key={item.id}
              className={cn("py-4 pl-12", isActive ? "nav-link" : "")}
            >
              <Link href={item.href} className="flex w-full items-center gap-6">
                <item.icon fill={isActive ? "#232323" : "#B1B1B1"} />
                <p
                  className={cn(
                    "whitespace-nowrap text-base font-medium md:text-lg",
                    isActive ? "text-[#232323]" : "text-[#B1B1B1]",
                  )}
                >
                  {item.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
