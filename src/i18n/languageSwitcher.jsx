import "./lang.scss";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // доступ к текущим настройкам языка
  const currentLanguage = i18n.language; // получение текущего языка

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // смена языка
  };

  let langs = {
    en: "en",
    ru: "ru",
  };

  return (
    <div>
      <button
        className="buttonSwitch ru"
        onClick={() => changeLanguage(currentLanguage === "en" ? "ru" : "en")}
      >
        {currentLanguage === "ru" ? "en" : "ru"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
