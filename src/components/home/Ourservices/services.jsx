import ServiceBlock from '../../MiniComponents/serviceBlockComponent/serviceBlock';
import styled from './services.module.scss';
 
import { useTranslation } from 'react-i18next';

const serviceKeys = [
  'vrDevelopment',
  'vrDesign',
  'vrConsulting',
  'vrGames',
  'vrEvents',
  'vrEntertainment'
];


export default function Services() {
const { t } = useTranslation();



const services = serviceKeys.map(key => ({
  key,
  title: t(`services.${key}.title`),
  description: t(`services.${key}.description`),
}));

const images = {
    vrDevelopment:  '/home_assests/Services/software.svg',
    vrDesign: '/home_assests/Services/design.svg',
    vrConsulting: '/home_assests/Services/review.svg',
    vrGames: '/home_assests/Services/video-console.svg',
    vrEvents: '/home_assests/Services/party.svg',
    vrEntertainment: '/home_assests/Services/theatre.svg'
}
  
 
return (
  <main className={styled.container}>
    <div className={styled.header}>
      <div>
        <h2 className={styled.subtitle}>{t("ourService.title")}</h2>
        <h1 className={styled.title}>{t("ourService.title")}</h1>
      </div>

      <p className={styled.description}>{t("ourService.description")}</p>
    </div>
    <div className={styled.services}>
      {services.map((service) => (
        <ServiceBlock
          key={service.key}
          title={service.title}
          description={service.description}
          image={images[service.key]}
        />
      ))}
    </div>
  </main>
);   
} 