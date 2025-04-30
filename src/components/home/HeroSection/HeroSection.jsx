import "../HeroSection/HeroSection.scss";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import styled from "styled-components";
import Button from "../../MiniComponents/Button";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero__main">
        <div className="hero">
          <h1 className="hero_title">{t("hero.title")}</h1>
          <h6 className="hero_description">{t("hero.subtitle")}</h6>
          <div className="hero_button">
            <Button Width="206px" Value={t("hero.button")} />
          </div>
          <div className="features">
            <div className="features__images">
              <img src="public/home_assests/main/client1.png" alt="Client 1" />
              <img src="public/home_assests/main/client2.png" alt="Client 2" />
              <img src="public/home_assests/main/client3.png" alt="Client 3" />
            </div>
            <img
              className="happyClient"
              alt="Happy Client"
              width="132px"
              src="public/home_assests/main/happyClient.svg"
            />
            <div className="VrPhoto">
              <img
                src="public/home_assests/main/kaka_clipdrop-relight.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          src="public/home_assests/main/Image.png"
          alt="Hero"
          className="hero_photo"
        />
      </div>
    </>
  );
}

export default HeroSection;
