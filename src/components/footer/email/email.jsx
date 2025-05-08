import styles from './email.module.scss';
import { useTranslation } from 'react-i18next';
import { useState , useRef } from 'react';

export default function Email() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let userEmail = emailRef.current.value;
    }

    return (
      <div className={styles.email}>
        <div className={styles.email__container}>
          <div className={styles.email__title}>{t("footer.emailtitle")}</div>
          <form className={styles.email__inputContainer}>
            <div className={styles.email__input}>
              <img
                className={styles.email__inputIcon}
                src="./public/footer/Message.svg"
                alt="email"
              />
              <input ref={emailRef} type="email" placeholder={t("footer.emailplaceholder")} className={styles.email__inputText} />
              <button onClick={handleSubmit} type="submit" className={styles.email__inputButton}><img src="./public/footer/Send.svg" alt="arrow" /></button>
            </div>
          </form>
        </div>
      </div>
    );
}
