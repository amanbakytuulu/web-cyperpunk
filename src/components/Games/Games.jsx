import React from 'react';
import cn from 'classnames';
import styles from './Games.module.scss';
import { IMAGES } from '../../constants';

export const Games = () => {
  return (
    <div className={styles.games}>
      <div className={styles.games__imgBlock}>
        <img src={IMAGES.gameDisk} alt="ps" />
      </div>

      <div className={styles.games__content}>
        <h2 className={cn('title', styles.title)}>
          Купить игру Cyberpunk 2077
        </h2>
        <p className={styles.subTitle}>В комплект входит:</p>

        <ul className={styles.list}>
          <li className={styles.list__item}>
            <img src={IMAGES.disk} alt="disk" />
            <p>Футляр с игровыми дисками</p>
          </li>
          <li className={styles.list__item}>
            <img src={IMAGES.code} alt="code" />
            <p>Футляр с кодом для загрузки игры и дисками (pc)</p>
          </li>
          <li className={styles.list__item}>
            <img src={IMAGES.collections} alt="collections" />
            <p>Справочник с информацией об игровом мире</p>
          </li>
        </ul>

        <p className={styles.subTitle}>Выберите платформу:</p>
        <img src={IMAGES.platforms} alt="platforms" />
      </div>
    </div>
  );
};
