import { useTranslation } from "react-i18next"
import Question from "../../MiniComponents/question";
import style from "./WhyUs.module.scss";
 
 
const questions =   [
        {
            question: "whyChooseUs.questions.q1.title",
            description: "whyChooseUs.questions.q1.desc"
        },
        {
            question: "whyChooseUs.questions.q2.title",
            description: "whyChooseUs.questions.q2.desc"
        },
        {
            question: "whyChooseUs.questions.q3.title",
            description: "whyChooseUs.questions.q3.desc"
        }
    ];


export function WhyChooseUs( props ) {
    const { t } = useTranslation();
    
    return (
      <main className={style.mainContainer}>
        <div>
          <h2 className={style.text}>{t("whyChooseUs.text")}</h2>
          <h2 className={style.title}>{t("whyChooseUs.title")}</h2>
          {questions.map((q, index) => (
            <Question
              key={index}
              question={t(q.question)}
              description={t(q.description)}
            />
          ))}
        </div>
        {props.children}
      </main>
    );
}

export function WhyUsImg() {
    return (
      <div className={style.imgContainer}>
        <div className={style.imgWrapper}>
          <img className={style.img1} src="/home_assests/whyUs/Aman.png" alt="" />
          <img className={style.img2} src="/home_assests/whyUs/square.png" alt="" />
          <img className={style.img3} src="/home_assests/whyUs/vr2.png" alt="" />
          <div className={style.img4}></div>
        </div>
      </div>
    );
}
