import "./header.scss";
import ReactDOM from "react-dom";
import { useState } from "react";
// import logo from "../../assets/logos/logo.svg";
import LanguageSwitcher from "../../i18n/languageSwitcher";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import styled from "styled-components";

function Header() {
  const { t } = useTranslation();
  let path = useLocation().pathname;

  return (
    <div className="header__container">
      <div className="header">
        <div className="header__logo">
          <img src="public/logos/logo.svg" alt="" />
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
    { name: "page", label: t("headerbuttons.page.title"), to: "/page" },
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

  const PagePortal = styled.div`
        position: absolute;
        margin-top: 70px;
        margin-left: 820px;
        visibility: ${(props) => (props.active ? "visible" : "hidden")};
        z-index: 100;
  `;

function PageButton() {
  // const { t } = useTranslation();
  const [active, setActive] = useState(true);

  const pageLinks = [
    { to: "/page/Pricingplan", label: "Pricing Plan" },
    { to: "/page/Terms", label: "Terms & Conditions" },
    { to: "/page/Privacy", label: "Privacy Policy" },
  ];



  return ReactDOM.createPortal(
    <PagePortal active={active}>
      <div className="pagebutton__main">
      {pageLinks.map((link, index) => (
        <Link key={index} to={link.to} onClick={() => setActive(false)}>
          <div className="pagebutton__main--option">{link.label}</div>
        </Link>
      ))}
      </div>
    </PagePortal>,
    document.getElementById("modal-root")
  );
}

export default Header;
