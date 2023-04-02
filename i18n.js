import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const importLocales = async () => {
  const context = require.context('@/public/locales/', true, /\.json$/);
  const translations = {};

  for (const key of context.keys()) {
    const [_, lang, namespace] = key.split('/').slice(-3);
    const json = await import(`@/public/locales/${lang}/${namespace}`);

    if (!translations[lang]) {
      translations[lang] = {};
    }

    translations[lang][namespace.replace('.json', '')] = json.default;
  }

  return translations;
};

(async () => {
  const resources = await importLocales();

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      debug: true,
      react: {
        useSuspense: false,
      },
    });
})();

export default i18n;
