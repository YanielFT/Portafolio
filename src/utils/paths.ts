import { redirect } from "next/navigation";

const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

export const paths = {
  home: "/",
  auth: {
    login: `${ROOTS.AUTH}/login`,
    signUp: `${ROOTS.AUTH}/sign-up`,
    resetPassword: `${ROOTS.AUTH}/reset-password`,
  },
  dashboard: {
    overview: "/dashboard",
    account: "/dashboard/account",
    customers: "/dashboard/customers",
    integrations: "/dashboard/integrations",
    settings: "/dashboard/settings",
  },
  errors: { notFound: "/errors/not-found" },
} as const;

export const redirectToLogin = async () => {
  redirect(paths.auth.login);
};
