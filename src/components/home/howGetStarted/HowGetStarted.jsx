import React from "react";
import styled from "./HowGetStarted.module.scss";
import { useTranslation } from "react-i18next";

import Button from "../../MiniComponents/Button";
const HowGetStarted = () => {
  const { t } = useTranslation();

  return (
    <main className={styled.main}>
      <div className={styled.titles_container}>
        <h3 className={styled.title}>{t("HowToGet.title")}</h3>
        <h1 className={styled.subTitle}>{t("HowToGet.subtitle")}</h1>
      </div>
      <VidBack />
    </main>
  );
};

const VidBack = React.memo(() => {
  const { t } = useTranslation();

  return (
    <div className={styled.container}>
      <div className={styled.video_background}>
        <video autoPlay preload="none" width={1200} loading="lazy" loop muted>
          <source
            src="https://res.cloudinary.com/dnrgvy2r3/video/upload/v1748784703/vecteezy_abstract-graphics-of-digital-tunnel-stimulate-imagination_45713984_ajszv2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styled.video_content}>
        <div className={styled.video_service}>{t("HowToGet.service")}</div>
        <br />
        <div className={styled.video_title}>{t("HowToGet.title")}</div>
      </div>

      <Button
        className={styled.Getbutton}
        Value={t("HowToGet.GetStarted")}
        width={180}
      ></Button>
    </div>
  );
});

export default HowGetStarted;
