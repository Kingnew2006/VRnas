import "./header.scss";
import ReactDOM from "react-dom";
import { useState, useRef } from "react";
// import logo from "../../assets/logos/logo.svg";
import LanguageSwitcher from "../../i18n/languageSwitcher";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styled from "styled-components";
import ThemeToggleButton from "../../../style/theme";
import Button from "../MiniComponents/Button";

function Header() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(false);
    }, 1000); // небольшая задержка на уход мышки
  };

  return (
    <div className="header__container">
      <div className="header">
        <div className="header__logo">
          <div className="backGradient"></div>
          <NavLink to="/">
            <img src="/logos/logo.svg" alt="Logo" />
          </NavLink>
        </div>

        <div className="header__links">
          <Links
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="header__state__container">
          <div className="back"></div>
          <div className="header__theme">
            <ThemeToggleButton />
          </div>
          <div className="header__lang">
            <LanguageSwitcher />
          </div>
        </div>

        <NavLink to="/contactus">
          <Button Value={t("headerbuttons.contactus")} className="header__contactus"  ></Button>
        </NavLink>
      </div>
      <div className="header__pagebutton">{hovered && <PageButton />}</div>
    </div>
  );
}

function Links({ onMouseEnter, onMouseLeave }) {
  const { t } = useTranslation();

  const linkItems = [
    { name: "home", to: "/", label: t("headerbuttons.home") },
    { name: "aboutus", to: "/aboutus", label: t("headerbuttons.aboutus") },
    { name: "service", to: "/services", label: t("headerbuttons.service") },
    {
      name: "page",
      label: t("headerbuttons.page.title"),
      to: "/page",
      nolink: true,
    },
    { name: "blog", to: "/blog", label: t("headerbuttons.blog") },
  ];

  return (
    <ul>
      {linkItems.map((item) => {
        if (item?.nolink)
          return (
            <li key={item.name}>
              <div
                className="link"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {t(item.label)}
              </div>
            </li>
          );
        return (
          <li key={item.name}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "link--active" : " ")}
            >
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

const PagePortal = styled.div`
  position: absolute;
  margin-top: 70px;
  margin-left: 820px;
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  z-index: 100;
`;

function PageButton() {
  const pageLinks = [
    { to: "/page/Pricingplan", label: "Pricing Plan" },
    { to: "/page/Terms", label: "Terms & Conditions" },
    { to: "/page/Privacy", label: "Privacy Policy" },
  ];

  return ReactDOM.createPortal(
    <PagePortal  $active="true">
      <div className="pagebutton__main">
        {pageLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "link--active pagebutton__main--option" : "pagebutton__main--option"
            }
          >
             <div>{link.label} </div>
          </NavLink>
        ))}
      </div>
    </PagePortal>,
    document.getElementById("modal-root")
  );
}
export default Header;
