import { useTranslation } from "react-i18next";
import styled from './serviceBlock.module.scss';

export default function ServiceBlock({title, description, image}) {
  const { t } = useTranslation();

  return (
    <div className={styled.serviceBlock}>
      <div>
        <img className={styled.serviceBlock__image} src={`${image}`} alt={title} /> 
      </div>
      <div className={styled.serviceBlock__content}>
        <h3 className={styled.serviceBlock__title}>{t(`${title}`)}</h3>
        <p className={styled.serviceBlock__description}>{t(`${description}`)}</p>
      </div>
    </div>
  );
}
