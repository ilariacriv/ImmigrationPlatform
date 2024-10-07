import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    keySeparator: '.', // We do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // React already safes from xss
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to load translation files
    },
    ns: ['maintext', 'topic1'], // List of namespaces
    defaultNS: 'maintext', // Default namespace
    react: {
      useSuspense: false,
    },
  });

export default i18n;