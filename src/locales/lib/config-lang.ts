import { enUS as enUSAdapter, es as esESAdapter } from "date-fns/locale";

import { defaultNS, fallbackLng, languages } from "../lang";

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: "English",
    value: "en",
    adapterLocale: enUSAdapter,
    icon: "flagpack:gb-nir",
    numberFormat: {
      code: "en-US",
      currency: "USD",
    },
  },
  {
    label: "Spanish",
    value: "es",
    adapterLocale: esESAdapter,
    icon: "flagpack:es",
    numberFormat: {
      code: "es-Es",
      currency: "EUR",
    },
  },
];

export const defaultLang = allLangs[0];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
