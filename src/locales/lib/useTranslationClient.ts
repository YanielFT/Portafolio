'use client';

import { useTranslation as useTranslationOrg, UseTranslationOptions } from 'react-i18next';
import { useCallback } from 'react';
import { useI18NContext } from './i18n-context';

export function useTranslationClient(ns?: string, options?: UseTranslationOptions<any>) {
  const { t, i18n } = useTranslationOrg(ns, options);
  const { language, changeLanguage } = useI18NContext();

  const onChangeLang = useCallback((newLng: string) => {
    i18n.changeLanguage(newLng);
    changeLanguage(newLng);
  }, [i18n, changeLanguage]);

  if (i18n.resolvedLanguage !== language) i18n.changeLanguage(language);

  return { t, onChangeLang };
}
