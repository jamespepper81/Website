import { BarChart, Lock, GraduationCap, ScrollText } from "lucide-react";

/**
 * Centralized product data source for the Header component.
 * 
 * This array defines all BitSleuth products displayed in both desktop and mobile navigation.
 * Used by the Products dropdown menu (desktop) and the mobile navigation menu to ensure
 * consistent product information across all views.
 * 
 * @property {string} href - The route path for the product page
 * @property {LucideIcon} icon - The Lucide React icon component for the product
 * @property {string} title - The display name of the product
 * @property {string} description - A short description of the product
 */
export const PRODUCTS = [
  {
    href: "/analyzer",
    icon: BarChart,
    title: "Wallet Analyzer",
    description: "AI-powered transaction analysis",
  },
  {
    href: "/wallet",
    icon: Lock,
    title: "Privacy Wallet",
    description: "Non-custodial, private BTC wallet",
  },
  {
    href: "/learn",
    icon: GraduationCap,
    title: "Learning Hub",
    description: "Bitcoin Educational Hub",
  },
  {
    href: "/history",
    icon: ScrollText,
    title: "Bitcoin History",
    description: "History of Bitcoin",
  },
];
