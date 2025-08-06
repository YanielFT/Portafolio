"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import { logger } from "@/utils/logger/default-logger";
import { paths } from "@/utils/paths";
import { useUser } from "@/context/UserContext";

export interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({
  children,
}: AuthGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [isChecking, setIsChecking] = React.useState<boolean>(true);

  const checkPermissions = async (): Promise<void> => {
    if (isLoading) {
      return;
    }

    if (error) {
      setIsChecking(false);
      return;
    }

    if (!user) {
      logger.debug(
        "[AuthGuard]: User is not logged in, redirecting to sign in"
      );
      router.replace(paths.auth.login);
      return;
    }
    setIsChecking(false);
  };

  React.useEffect(() => {
    checkPermissions().catch((err) => {
      logger.error("[AuthGuard]: Error verificando permisos", err);
    });
  }, [user, error, isLoading]);

  if (isChecking) {
    return null;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
