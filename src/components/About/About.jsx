import React from 'react';
import cn from 'classnames';
import styles from './About.module.scss';
import { IMAGES } from '../../constants';

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={cn('container', styles.about__container)}>
        <div className={styles.about__content}>
          <h2 className={cn('title')}>Найт-Сити изменит тебя навсегда!</h2>
          <p className={styles.about__text}>
            <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие
            которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
            модификации тела ценятся выше всего. Ты играешь за V, наёмника в
            поисках устройства, позволяющего обрести бессмертие. Ты сможешь
            менять киберимпланты, навыки и стиль игры своего персонажа, исследуя
            открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя
            окружает.
          </p>
        </div>
        <div className={styles.about__images}>
          <div className={styles.image}>
            <img src={IMAGES.bannerOne} alt="bannerOne" className="clipPath" />
          </div>
          <div className={styles.image}>
            <img src={IMAGES.bannerTwo} alt="bannerTwo" className="clipPath" />
          </div>
          <div className={styles.image}>
            <img
              src={IMAGES.bannerThree}
              alt="bannerThree"
              className="clipPath"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
