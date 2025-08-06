import * as React from "react";
import type { Viewport } from "next";

import { ThemeProvider } from "@/utils/theme-provider/theme-provider";
import { AuthGuard } from "@/components/auth/auth-guard";
import { SideNav } from "@/components/dashboard/layout/side-nav";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { GlobalStyles } from "@mui/material";
import { MainNav } from "@/components/dashboard/layout/main-nav";

export const viewport = {
  width: "device-width",
  initialScale: 1,
} satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <AuthGuard>
      <ThemeProvider>
        <GlobalStyles
          styles={{
            body: {
              "--MainNav-height": "56px",
              "--MainNav-zIndex": 1000,
              "--SideNav-width": "280px",
              "--SideNav-zIndex": 1100,
              "--MobileNav-width": "320px",
              "--MobileNav-zIndex": 1100,
            },
          }}
        />
        <Box
          sx={{
            bgcolor: "var(--mui-palette-background-default)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            minHeight: "100%",
          }}
        >
          <SideNav />
          <Box
            sx={{
              display: "flex",
              flex: "1 1 auto",
              flexDirection: "column",
              pl: { lg: "var(--SideNav-width)" },
            }}
          >
            <MainNav />
            <main>
              <Container maxWidth="xl" sx={{ py: "1rem" }}>
                {children}
              </Container>
            </main>
          </Box>
        </Box>
      </ThemeProvider>
    </AuthGuard>
  );
}
