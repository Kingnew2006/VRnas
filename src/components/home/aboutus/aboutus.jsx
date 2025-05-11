import Button from "../../MiniComponents/Button"
import styled from "./aboutus.module.scss"
import { useTranslation } from "react-i18next"

export default function AboutUs() {
    const { t } = useTranslation()

    return (
        <div className={styled.aboutUs}>
             <div className={styled.aboutUs__ImgSection}>
                <img className={styled.aboutUs__ImgSection__img1} src="public/home_assests/aboutUs/Bg.png" alt="" />
                <img className={styled.aboutUs__ImgSection__img2} src="public/home_assests/aboutUs/Light.png" alt="" />
                <img className={styled.aboutUs__ImgSection__img3} src="public/home_assests/aboutUs/Image.png" alt="" />
                <div className={styled.aboutUs__ImgSection__img4__main}><img className={styled.aboutUs__ImgSection__img4} src="public/home_assests/aboutUs/vr.png"  alt="" /></div>
             </div>
             <div className={styled.aboutUs__DesSection}>
                <div className={styled.aboutUs__DesSection__header}>{t(aboutUs.aboutUs)}</div>    
                <div className={styled.aboutUs__DesSection__text}></div>       
                <div className={styled.aboutUs__DesSection__des}></div>       
                <div className={styled.aboutUs__DesSection__features}>

                </div>       
                <Button Width="168px" Value="read more" />       
             </div>
        </div>
        )
    }
                       
