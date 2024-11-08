import {
  AccountsIcon,
  CreditCardsIcon,
  DashboardIcon,
  FolderIcon,
  InvestmentsIcon,
  LoansIcon,
  PayPalIcon,
  PrivilegesIcon,
  ServicesIcon,
  SettingsIcon,
  TransactIcon,
  TransactionsIcon,
} from "@/assets/icons";
import { SidebarItem, TransactionItem } from "./types";

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

export const transactionItems: TransactionItem[] = [
  {
    id: 1,
    description: "Deposit from my Card",
    date: "28 January 2021",
    amount: "850",
    trend: "negative",
    icon: FolderIcon,
    background: "#FFF5D9",
  },
  {
    id: 2,
    description: "Deposit Paypal",
    date: "25 January 2021",
    amount: "2,500",
    trend: "positive",
    icon: PayPalIcon,
    background: "#E7EDFF",
  },
  {
    id: 3,
    description: "Jemi Wilson",
    date: "21 January 2021",
    amount: "5,400",
    trend: "positive",
    icon: TransactIcon,
    background: "#DCFAF8",
  },
];

export const tabs = ["Edit Profile", "Preferences", "Security"];
