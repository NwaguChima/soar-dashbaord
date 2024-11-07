import {
  AccountsIcon,
  CreditCardsIcon,
  DashboardIcon,
  InvestmentsIcon,
  LoansIcon,
  PrivilegesIcon,
  ServicesIcon,
  SettingsIcon,
  TransactionsIcon,
} from "@/assets/icons";
import { SidebarItem } from "./types";

export const sidebarItems: SidebarItem[] = [
  { id: 1, label: "Dashboard", href: "/", icon: DashboardIcon },
  {
    id: 2,
    label: "Transactions",
    href: "/transactions",
    icon: TransactionsIcon,
  },
  { id: 3, label: "Accounts", href: "/accounts", icon: AccountsIcon },
  { id: 4, label: "Investments", href: "/investments", icon: InvestmentsIcon },
  {
    id: 5,
    label: "Credit Cards",
    href: "/credit-cards",
    icon: CreditCardsIcon,
  },
  { id: 6, label: "Loans", href: "/loans", icon: LoansIcon },
  { id: 7, label: "Services", href: "/services", icon: ServicesIcon },
  { id: 8, label: "My Privileges", href: "/privileges", icon: PrivilegesIcon },
  { id: 9, label: "Settings", href: "/settings", icon: SettingsIcon },
];

export const routesMap: Record<string, string> = {
  "/": "Overview",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loans": "Loans",
  "/services": "Services",
  "/privileges": "Privileges",
  "/settings": "Setting",
};
