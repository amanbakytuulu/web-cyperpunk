import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Hero.module.scss';
import { Header } from '../Header';
import { IMAGES } from '../../constants';
import { Button } from '../ui/Button';

const images = [
  {
    desktop: IMAGES.bannerOne,
    laptop: IMAGES.bannerOneL,
    mobile: IMAGES.bannerOneM,
  },
  {
    desktop: IMAGES.bannerTwo,
    laptop: IMAGES.bannerTwoL,
    mobile: IMAGES.bannerTwoM,
  },
  {
    desktop: IMAGES.bannerThree,
    laptop: IMAGES.bannerThreeL,
    mobile: IMAGES.bannerThreeM,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.hero}>
      <Header />
      {images.map((img, idx) => (
        <picture key={idx}>
          <source media="(max-width: 575px)" srcSet={img.mobile} />
          <source media="(max-width: 1024px)" srcSet={img.laptop} />
          <img
            src={img.desktop}
            alt={`banner ${idx}`}
            className={cn(styles.hero__bg, {
              [styles.active]: currentSlide === idx,
            })}
          />
        </picture>
      ))}
      <div className={cn('container', styles.hero__block)}>
        <div className={cn('clipPath', styles.banner)}>
          <h2 className={cn('title', styles.banner__title)}>
            Доступно на всех платформах
          </h2>
          <Button>Узнать больше</Button>
        </div>
      </div>
    </div>
  );
};
