import { FC } from "react";
import { IconProps } from "@/assets/icons";

export type SidebarItem = {
  id: number;
  label: string;
  href: string;
  icon: FC<IconProps>;
};
