import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        key: 'Hello World',
        // 他の英語の翻訳を追加...
      },
    },
    ja: {
      translation: {
        key: 'こんにちは、世界',
        // 他の日本語の翻訳を追加...
      },
    },
    // 他の言語を追加...
  },
  lng: 'en', // デフォルトの言語
  fallbackLng: 'en', // 未翻訳のキーがある場合に使用する言語
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
