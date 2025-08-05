import * as React from "react";
import type { Metadata } from "next";
import { config } from "@/utils/logger/config";
import { SignInForm } from "@/components/auth/sign-in-form";
import { GoogleLoginButton } from "@/components/auth/GoogleLoginButton";
import { Divider } from "@mui/material";

export const metadata = {
  title: `Sign in | Auth | ${config.site.name}`,
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <>
      <SignInForm />
      <Divider sx={{ marginBlock: 5 }} />
      <GoogleLoginButton />
    </>
  );
}
