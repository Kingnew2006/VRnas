 import styles from "./Features.module.scss";
import { useTranslation } from "react-i18next";
 

let features = [
    {img: 'public/home_assests/featuresBoard/Expetise.svg', title: 'features.Expertise.title', description: 'features.Expertise.desc'},
    {img: 'public/home_assests/featuresBoard/Custom.svg', title: 'features.Customization.title', description: 'features.Customization.desc'},
    {img: 'public/home_assests/featuresBoard/Service.svg', title: 'features.getInTouch.title', description: 'features.getInTouch.desc'}
]

export default function Features() {
    const { t } = useTranslation()


    return (
     <div className={styles.Features}> 
        {features.map((feature) => (
            <div className={styles.Features__card} key={feature.title}>
                <img className={styles.Features__img} src={feature.img} alt={feature.title} />
                <div className={styles.Features__title}>{t(feature.title)}</div>
                <div className={styles.Features__des}>{t(feature.description)}</div>
            </div>
        ))}
     </div>
    );
}