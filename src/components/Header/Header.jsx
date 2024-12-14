import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';
import { IMAGES } from '../../constants';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={cn('container', styles.header__container)}>
        <a href="/">
          <img src={IMAGES.logo} alt="logo" className={styles.header__logo} />
        </a>
        <ul className={styles.header__socials}>
          <li className={styles.header__social}>
            <a href="##">
              <img src={IMAGES.vk} alt="vk" />
            </a>
          </li>
          <li className={styles.header__social}>
            <a href="##">
              <img src={IMAGES.facebook} alt="facebook" />
            </a>
          </li>
          <li className={styles.header__social}>
            <a href="##">
              <img src={IMAGES.twitter} alt="twitter" />
            </a>
          </li>
          <li className={styles.header__social}>
            <a href="##">
              <img src={IMAGES.instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
