import { FC } from "react";
import { IconProps } from "@/assets/icons";

export interface SidebarItem {
  id: number;
  label: string;
  href: string;
  icon: FC<IconProps>;
}

export type TransactionItem = {
  id: number;
  description: string;
  date: string;
  amount: string;
  trend: Trend;
  background: string;
  icon: FC<IconProps>;
};

export type Trend = "positive" | "negative";
