import * as React from "react";
import type { Metadata } from "next";
import { config } from "@/utils/logger/config";

import { AccountContainer } from "@/components/dashboard/account/account-container";

export const metadata = {
  title: `Account | Dashboard | ${config.site.name}`,
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <AccountContainer />;
}
