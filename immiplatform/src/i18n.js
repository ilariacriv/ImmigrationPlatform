import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Import translation files
import maintextEN from './locales/en/maintextEN.json';
import maintextNO from './locales/no/maintextNO.json';
import topic1EN from './locales/en/topic1EN.json';
import topic1NO from './locales/no/topic1NO.json';

// Merge translation files
const translationEN = { ...maintextEN, ...topic1EN };
const translationNO = { ...maintextNO, ...topic1NO };

// The translations

const resources = {
  en: {
    translation: translationEN
  },
  no: {
    translation: translationNO
  }
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    keySeparator: '.', // Use dot notation for nested keys
    interpolation: {
      escapeValue: false // React already safes from xss
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;