import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ru from "./ru.json";

i18n
  .use(initReactI18next) // подключаем поддержку React
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: "en", // язык по умолчанию
    fallbackLng: "ru", // если перевода нет — подставить английский
    interpolation: {
      escapeValue: false, // чтобы можно было использовать HTML в строках
    },
  });

export default i18n;
