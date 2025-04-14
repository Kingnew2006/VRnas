import "./header.scss";
import { use, useState } from "react";
import logo from "../../assets/logos/logo.svg";
import LanguageSwitcher from "../../i18n/languageSwitcher";
import { useTranslation } from "../../../node_modules/react-i18next";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function Header() {
  const { t } = useTranslation();
  let path = useLocation().pathname;

  return (
    <div className="header__container">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>

        <div className="header__links">
          <Links />
        </div>

        <div className="header__lang">
          <LanguageSwitcher />
        </div>

        <Link to="/contactus">
          <button className="header__contactus">
            {t("headerbuttons.contactus")}
          </button>
        </Link>
      </div>
      <div className="header__pagebutton">
        {path === "/page" ? <PageButton /> : null}
      </div>
    </div>
  );
}

function Links() {
  const [active, setActive] = useState("home");
  const { t } = useTranslation();

  const linkItems = [
    { name: "home", to: "/", label: t("headerbuttons.home") },
    { name: "aboutus", to: "/aboutus", label: t("headerbuttons.aboutus") },
    { name: "service", to: "/services", label: t("headerbuttons.service") },
    { name: "page", label: t("headerbuttons.page.page"), to: "/page" },
    { name: "blog", to: "/blog", label: t("headerbuttons.blog") },
  ];

  return (
    <ul>
      {linkItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.to}
            className={clsx("", {
              "link--active": active === item.name,
            })}
            onClick={() => setActive(item.name)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function PageButton() {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);

  const pageLinks = [
    { to: "/page/Pricingplan", label: "Pricing Plan" },
    { to: "/page/Terms", label: "Terms & Conditions" },
    { to: "/page/Privacy", label: "Privacy Policy" },
  ];

  return (
    <div
      className="pagebutton__main"
      style={{
        position: "absolute",
        left: "53rem",
        visibility: active ? "visible" : "hidden",
      }}
    >
      {pageLinks.map((link, index) => (
        <Link key={index} to={link.to} onClick={() => setActive(false)}>
          <div className="pagebutton__main--option">{link.label}</div>
        </Link>
      ))}
    </div>
  );
}

export default Header;
