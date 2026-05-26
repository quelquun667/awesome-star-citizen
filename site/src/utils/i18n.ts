import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

export type Lang = 'en' | 'fr' | 'es';

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
];

const dicts: Record<Lang, typeof en> = { en, fr, es };

export function dict(lang: Lang) {
  return dicts[lang];
}

export function langHref(base: string, lang: Lang): string {
  const clean = base.endsWith('/') ? base.slice(0, -1) : base;
  return lang === 'en' ? `${clean}/` : `${clean}/${lang}/`;
}
