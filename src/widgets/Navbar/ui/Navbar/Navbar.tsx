import { styles } from "@/shared/const/styles.ts";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "@/shared/assets/logo-color.svg";
import MenuIcon from "@/shared/assets/menu.svg";
import CloseIcon from "@/shared/assets/close.svg";
import { navLinks } from "@/widgets/Navbar/const/links.ts";
import { useState } from "react";
import { LangSwitcher } from "@/features/LangSwitcher";
import { Trans, useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={`w-full flex items-center top-0 fixed z-20 bg-primary`}>
      <div
        className={`${styles.paddingX} w-full flex justify-between items-center py-5 max-w-7xl mx-auto`}
      >
        <Link
          to={"/"}
          onClick={() => window.scrollTo(0, 0)}
          className={"flex items-center gap-2"}
        >
          <LogoIcon className={"w-9 h-9"} />
          <span
            className={
              "text-white flex text-[18px] font-bold cursor-pointer gap-1"
            }
          >
            <Trans i18nKey={'name'}>
              Daniel <span className={"sm:block hidden"}> | Fedorov</span>
            </Trans>
          </span>
        </Link>
        <ul className={"list-none hidden sm:flex flex-row gap-10"}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={
                "hover:text-white text-secondary text-[18px] font-medium cursor-pointer"
              }
            >
              <a href={`#${link.to}`}>{t(link.name)}</a>
            </li>
          ))}
          <li>
            <LangSwitcher />
          </li>
        </ul>

        <div className={"sm:hidden flex flex-1 justify-end items-center"}>
          <img
            src={isVisible ? CloseIcon : MenuIcon}
            onClick={() => setIsVisible(!isVisible)}
            alt={"menu"}
            className={"w-[28px] h-[28px] cursor-pointer"}
          />

          <div
            className={`${
              !isVisible ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]`}
          >
            <ul
              className={
                "list-none flex flex-col gap-4 items-start justify-end"
              }
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={
                    "font-poppins text-secondary text-[16px] font-medium cursor-pointer"
                  }
                  onClick={() => setIsVisible(false)}
                >
                  <a href={`#${link.to}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
