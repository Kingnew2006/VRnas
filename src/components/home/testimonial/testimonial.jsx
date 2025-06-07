import React from 'react'
import styled from "./testimonial.module.scss"
import { useTranslation } from 'react-i18next';  
import FeedbackCircle from '../../MiniComponents/Circle/feedbackCircle';

const Testimonial = () => {
  const { t } = useTranslation();

   const personal = [
  {
    id: "personal1",
    title: "testimonial.Personals.Personal1.Title",
    description: "testimonial.Personals.Personal1.Description",
    img: "/home_assests/testimonial/personal1.svg"
  },
  {
    id: "personal2",
    title: "testimonial.Personals.Personal2.Title",
    description: "testimonial.Personals.Personal2.Description",
    img: "/home_assests/testimonial/personal2.svg"
  },
  {
    id: "personal3",
    title: "testimonial.Personals.Personal3.Title",
    description: "testimonial.Personals.Personal3.Description",
    img: "/home_assests/testimonial/personal3.svg"
  },
  {
    id: "personal4",
    title: "testimonial.Personals.Personal4.Title",
    description: "testimonial.Personals.Personal4.Description",
    img: "/home_assests/testimonial/personal4.svg"
  },
  {
    id: "personal5",
    title: "testimonial.Personals.Personal5.Title",
    description: "testimonial.Personals.Personal5.Description",
    img: "/home_assests/testimonial/personal5.svg"
  },
  {
    id: "personal6",
    title: "testimonial.Personals.Personal6.Title",
    description: "testimonial.Personals.Personal6.Description",
    img: "/home_assests/testimonial/personal6.svg"
  }
];


  return (
     <main className={styled.main}>
         <div className={styled.bg}><img src="/home_assests/testimonial/Line.svg" alt="a pic" /></div>
         <div className={styled.main__title}>{t('testimonial.title')}</div>
         <div className={styled.main__description}>{t('testimonial.des')}</div>
         <div className={styled.img}>
            <div className={styled.img_vr_gradient}></div>
         </div>
         <div className={styled.personal}>
            {personal.map((person) => {
               return <div className={styled[person.id]} key={person.id}><FeedbackCircle img={person.img} des={t(person.description)} job={t(person.title)}/></div>
            })}
         </div>
     </main>
  )
}

export default Testimonial