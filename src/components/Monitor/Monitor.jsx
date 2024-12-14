import React from 'react';
import cn from 'classnames';
import styles from './Monitor.module.scss';
import { IMAGES } from '../../constants';
import { Button } from '../ui/Button';

export const Monitor = () => {
  return (
    <div className={styles.monitor}>
      <div className="container">
        <div className={styles.monitor__container}>
          <div className={styles.monitor__imgBlock}>
            <img src={IMAGES.monitor} alt="monitor" />
            <img src={IMAGES.model} alt="model" height={80} />
          </div>
          <div className={styles.monitor__content}>
            <h2 className={cn('title', styles.monitor__title)}>
              Полное погружение вместе с HP
            </h2>
            <p className={styles.monitor__desc}>
              Погрузись в современные экшен-игры с реалистичным изображением с
              помощью монитора с диагональю 23,8 дюйма, созданном для
              отображения максимально насыщенных цветов. Успевай реагировать на
              любые события с временем отклика 1 мс и частотой в 144 Гц!
            </p>
            <ul className={styles.items}>
              <li className={styles.item}>
                <img src={IMAGES.draw} alt="draw" />
                <p>Яркие насыщенные цвета</p>
              </li>
              <li className={styles.item}>
                <img src={IMAGES.star} alt="star" />
                <p>Кристальная четкость изображения</p>
              </li>
              <li className={styles.item}>
                <img src={IMAGES.transition} alt="transition" />
                <p>Быстрые движения и плавный геймплей</p>
              </li>
            </ul>
            <Button>Подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
