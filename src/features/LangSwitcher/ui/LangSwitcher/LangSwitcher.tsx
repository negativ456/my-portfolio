import { useTranslation } from "react-i18next";
import i18n from "i18next";

export const LangSwitcher = () => {
  const { t } = useTranslation();
  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <button
      className={
        "hover:text-white text-secondary text-[18px] font-medium cursor-pointer"
      }
      onClick={toggle}
    >
      {t("Language")}
    </button>
  );
};
