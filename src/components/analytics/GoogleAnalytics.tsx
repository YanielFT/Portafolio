"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_TRACKING_ID = "G-84JTQB0ZWN";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasFiredInitialPageview = useRef(false);

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`;
    if (window.gtag) {
      // Evita firing duplicado en el primer render
      if (!hasFiredInitialPageview.current) {
        hasFiredInitialPageview.current = true;
        return;
      }
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}