"use client";

import React, { type ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import { useUser } from "@/context/UserContext";
import { logger } from "@/utils/logger/default-logger";
import { paths } from "@/utils/paths";

export interface GuestGuardProps {
  children: ReactNode;
}

export function GuestGuard({
  children,
}: GuestGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const checkPermissions = async (): Promise<void> => {
    setIsChecking(true);
    if (isLoading) return;

    if (error) {
      logger.debug({ error });
      setIsChecking(false);
      return;
    }

    if (user?.profile.role === "user") {
      logger.debug("[GuestGuard]: User is logged in, redirecting to dashboard");
      router.replace(paths.home);
    } else if (user?.profile.role === "admin") {
      logger.debug(
        "[GuestGuard]: Admin User is logged in, redirecting to landing page"
      );
      router.replace(paths.dashboard.overview);
    } else {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkPermissions().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [user, error, isLoading]);

  if (isChecking) {
    return null;
  }

  if (error) {
    return <Alert color="error">{error}</Alert>;
  }

  return <>{children}</>;
}
