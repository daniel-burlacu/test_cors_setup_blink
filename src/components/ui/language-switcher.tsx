'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => {
        const newLang = language === 'en' ? 'es' : 'en';
        console.log('Switching language from', language, 'to', newLang);
        setLanguage(newLang);
      }}
      className="btn btn-sm bg-white text-green-800 hover:bg-green-100 border-none"
      title="Switch Language"
    >
      {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
    </button>
  );
}

export function LanguageSwitcherMobile() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => {
        const newLang = language === 'en' ? 'es' : 'en';
        console.log('Switching language from', language, 'to', newLang);
        setLanguage(newLang);
      }}
      className="btn btn-xs bg-white text-green-800 hover:bg-green-100 border-none"
      title="Switch Language"
    >
      {language === 'en' ? '🇪🇸' : '🇺🇸'}
    </button>
  );
}
