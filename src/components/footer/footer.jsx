import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import Email from './email/email';

const Footer = () => {
    const { t } = useTranslation();

    const footerLinks = {
        quicklinks: [
            { key: 'home', path: '/' },
            { key: 'pricing', path: '/pricing' },
            { key: 'service', path: '/services' },
            { key: 'blog', path: '/blog' },
            { key: 'team', path: '/team' }
        ],
        support: [
            { key: 'about', path: '/aboutus' },
            { key: 'contact', path: '/contact' },
            { key: 'faq', path: '/faq' },
            { key: 'terms', path: '/terms' },
            { key: 'privacy', path: '/privacy' }
        ],
        info: [
            { key: 'address', path: '/address' },
            { key: 'email', path: '/email' },
            { key: 'phone', path: '/phone' }
        ]
    };

    const images = {
        mainlogo: "/logos/logo.svg",
        logo1: "/footer/1.svg",
        logo2: "/footer/2.svg",
        logo3: "/footer/3.svg",
        logo4: "/footer/4.svg"
    }

    return (
        <div className={styles.footer__container}>
            <Email />
            <footer className={styles.footer}>
                <div className={styles.footer__logoSection}>
                    <img src={images.mainlogo} alt="logo" className={styles.footer__logo} />
                <div className={styles.footer__social}>
                    <img src={images.logo1} alt="logo" className={styles.footer__logo} />
                    <img src={images.logo2} alt="logo" className={styles.footer__logo} />
                    <img src={images.logo3} alt="logo" className={styles.footer__logo} />
                    <img src={images.logo4} alt="logo" className={styles.footer__logo} />
                </div>
            </div>
            <div className={styles.footer__linksSection}>
                <div className={styles.footer__links + " " + styles.footer__links1}>
                    <h3 className={styles.footer__title}>{t('footer.quicklinks')}</h3>
                    <ul className={styles.footer__list}>
                        {footerLinks.quicklinks.map((link) => (
                            <li key={link.key} className={styles.footer__item}>
                                <Link to={link.path} className={styles.footer__link}>{t(`footer.${link.key}`)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.footer__links + " " + styles.footer__links2}>
                    <h3 className={styles.footer__title}>{t('footer.support')}</h3>
                    <ul className={styles.footer__list}>
                        {footerLinks.support.map((link) => (
                            <li key={link.key} className={styles.footer__item}>
                                <Link to={link.path} className={styles.footer__link}>{t(`footer.${link.key}`)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.footer__links + " " + styles.footer__links3}>
                    <h3 className={styles.footer__title}>{t('footer.help')}</h3>
                    <ul className={styles.footer__list}>
                        {footerLinks.info.map((link) => (
                            <li key={link.key} className={styles.footer__item}>
                                <div className={styles.footer__link}>{t(`footer.${link.key}`)}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__bottomContainer}>
                <p className={styles.footer__copyright}>{t('footer.copyright')}</p>
            </div>
        </div>
    );
};

export default Footer;
