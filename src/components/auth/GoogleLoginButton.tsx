"use client";

import { paths } from "@/utils/paths";
import { createClient } from "@/utils/supabase/client";
import { Stack, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";

export function GoogleLoginButton() {
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: paths.home,
      },
    });

    if (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }

    enqueueSnackbar({
      message: "Iniciando sesión con Google...",
      variant: "info",
    });
  };

  return (
    <Stack justifyItems="center" alignItems="center">
      <Typography
        sx={{ ":hover": { cursor: "pointer", color: "primary.main" } }}
        onClick={handleLogin}
        variant="subtitle2"
      >
        Sign in / Sign up with Google
      </Typography>
    </Stack>
  );
}
