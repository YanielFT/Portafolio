import { paths } from "@/utils/paths";

export const navItems = [
  {
    key: "overview",
    title: "Overview",
    href: paths.dashboard.overview,
    icon: "chart-pie",
    roles: ["admin"], // Solo admin
  },
  {
    key: "customers",
    title: "Customers",
    href: paths.dashboard.customers,
    icon: "users",
    roles: ["admin"], // Solo admin
  },
  {
    key: "settings",
    title: "Settings",
    href: paths.dashboard.settings,
    icon: "gear-six",
    roles: ["admin"], // Solo admin
  },
  {
    key: "account",
    title: "Account",
    href: paths.dashboard.account,
    icon: "user",
    roles: ["admin", "user"], // Ambos roles
  },
];
