import React from 'react';
import styles from './Footer.module.scss';
import { IMAGES } from '../../constants';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          <div className={styles.footer__sponsors}>
            <img src={IMAGES.logo} alt="logo" />
            <img src={IMAGES.sponsor} alt="sponsor" />
          </div>
          <div className={styles.footer__privacy}>
            <a href="/">Лицензия</a>
            <a href="/">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
      <p className={styles.footer__sign}>
        CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®
      </p>
    </div>
  );
};
