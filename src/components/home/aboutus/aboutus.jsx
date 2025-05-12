import Button from "../../MiniComponents/Button"
import styled from "./aboutus.module.scss"
import { useTranslation } from "react-i18next"

export default function AboutUs() {
    const { t } = useTranslation()

    let facts = [
        t("mainPageAboutUs.facts.cut"),
        t("mainPageAboutUs.facts.versatile"),
        t("mainPageAboutUs.facts.affordable")
    ]

    return (
        <div className={styled.aboutUs}>
             <div className={styled.aboutUs__ImgSection}>
                <img className={styled.aboutUs__ImgSection__img1} src="/home_assests/aboutUs/Bg.png" alt="" />
                <img className={styled.aboutUs__ImgSection__img2} src="/home_assests/aboutUs/Light.png" alt="" />
                <img className={styled.aboutUs__ImgSection__img3} src="/home_assests/aboutUs/Image.png" alt="" />
                <div className={styled.aboutUs__ImgSection__img4__main}><img className={styled.aboutUs__ImgSection__img4} src="/home_assests/aboutUs/vr.png"  alt="" /></div>
             </div>
             <div className={styled.aboutUs__DesSection}>
                <span className={styled.aboutUs__DesSection__header}>{t("mainPageAboutUs.head")}</span>
                <div className={styled.aboutUs__DesSection__text}>{t("mainPageAboutUs.title")}</div>
                <div className={styled.aboutUs__DesSection__des}>{t("mainPageAboutUs.desc")}</div>
                <div className={styled.aboutUs__DesSection__features}>
                    {facts.map((fact, index) => {
                        return (
                            <div className={styled.aboutUs__DesSection__features__fact} key={index}>
                                <img className={styled.aboutUs__DesSection__features__fact__img} src="/home_assests/aboutUs/checkBox.svg" alt="" />
                                <div className={styled.aboutUs__DesSection__features__fact__text}>{fact}</div>
                            </div>
                        );
                    })}
                </div>
                <Button Width="168px" className={styled.aboutUs__DesSection__button} Value={t("mainPageAboutUs.readMore")} />       
             </div>
        </div>
        )
    }
                       
