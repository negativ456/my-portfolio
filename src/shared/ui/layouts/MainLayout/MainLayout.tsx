import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`relative z-0 bg-primary ${
        i18n.language === "en" ? "en" : "ru"
      }`}
    >
      {children}
    </div>
  );
};
