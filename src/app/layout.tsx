// app/layout.tsx
import acceptLanguage from "accept-language";
import { cookies } from "next/headers";
import { cookieI18Name, fallbackLng, languages } from "@/locales/lang";
import { UserProvider } from "@/context/UserContext";
import { getSessionUser } from "@/utils/sessions";
import { SnackbarProvider } from "@/components/ui/snackbar";

acceptLanguage.languages(languages);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lng =
    acceptLanguage.get(cookies().get(cookieI18Name)?.value) || fallbackLng;
  const user = await getSessionUser();

  return (
    <html lang={lng}>
      <body>
        <UserProvider initialUser={user}>
          <SnackbarProvider>{children}</SnackbarProvider>
        </UserProvider>
      </body>
    </html>
  );
}
