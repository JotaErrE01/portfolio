import { ui, defaultLang } from './ui';

type TranslationKey = keyof typeof ui;

export function getLangFromUrl(url: URL): TranslationKey {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as TranslationKey;
  return defaultLang;
}

export function useTranslations(lang: TranslationKey) {
  return function t(key: string): string {
    if (`${key}`.includes('.')) {
      const keys = key.split('.');
      let result: any = ui[lang];
      for (const k of keys) {
        result = result ? result[k] : null;
      }
      return result || key;
    }
    return key;
  }
}