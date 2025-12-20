'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translation';
import Image from 'next/image';

const LANGUAGES: { code: Language; flag: string; name: string; countryCode: string }[] = [
  { code: 'en', flag: 'us', name: 'English', countryCode: 'us' },
  { code: 'es', flag: 'es', name: 'Español', countryCode: 'es' },
  { code: 'de', flag: 'de', name: 'Deutsch', countryCode: 'de' },
  { code: 'pt', flag: 'pt', name: 'Português', countryCode: 'pt' },
  { code: 'fr', flag: 'fr', name: 'Français', countryCode: 'fr' },
  { code: 'ro', flag: 'ro', name: 'Română', countryCode: 'ro' },
  { code: 'it', flag: 'it', name: 'Italiano', countryCode: 'it' },
  { code: 'fi', flag: 'fi', name: 'Suomi', countryCode: 'fi' },
  { code: 'sv', flag: 'se', name: 'Svenska', countryCode: 'se' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = LANGUAGES.find(lang => lang.code === language) || LANGUAGES[0];

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className="btn btn-sm bg-white text-green-800 hover:bg-green-100 border-none p-2"
        title="Select Language"
      >
        <Image
          src={`https://flagcdn.com/w40/${currentLanguage.countryCode}.png`}
          alt={currentLanguage.name}
          width={32}
          height={24}
          className="rounded"
        />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-20 gap-1"
      >
        {LANGUAGES.map(lang => (
          <li key={lang.code}>
            <button
              onClick={() => {
                setLanguage(lang.code);
                console.log('Switching language to', lang.code);
              }}
              className={`p-2 hover:bg-green-100 rounded flex items-center justify-center ${language === lang.code ? 'bg-green-200' : ''}`}
              title={lang.name}
            >
              <Image
                src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                alt={lang.name}
                width={32}
                height={24}
                className="rounded"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LanguageSwitcherMobile() {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = LANGUAGES.find(lang => lang.code === language) || LANGUAGES[0];

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className="btn btn-xs bg-white text-green-800 hover:bg-green-100 border-none p-1"
        title="Select Language"
      >
        <Image
          src={`https://flagcdn.com/w40/${currentLanguage.countryCode}.png`}
          alt={currentLanguage.name}
          width={24}
          height={18}
          className="rounded"
        />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-16 gap-1"
      >
        {LANGUAGES.map(lang => (
          <li key={lang.code}>
            <button
              onClick={() => {
                setLanguage(lang.code);
                console.log('Switching language to', lang.code);
              }}
              className={`p-1 hover:bg-green-100 rounded flex items-center justify-center ${language === lang.code ? 'bg-green-200' : ''}`}
              title={lang.name}
            >
              <Image
                src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                alt={lang.name}
                width={24}
                height={18}
                className="rounded"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
