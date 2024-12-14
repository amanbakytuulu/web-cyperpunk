import React from 'react';
import cn from 'classnames';
import styles from './Event.module.scss';
import { IMAGES } from '../../constants';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { FilePicker } from '../ui/FilePicker';
import { useForm } from 'react-hook-form';

export const Event = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <>
      <img src={IMAGES.dotsLine} alt="dots" className={styles.dots} />
      <div className={styles.event}>
        <div className="container">
          <div className={styles.event__header}>
            <img src={IMAGES.event} alt="event" className={styles.event__img} />
            <img
              src={IMAGES.console}
              alt="console"
              className={styles.event__console}
            />

            <h2 className={cn('title', styles.event__title)}>
              Играй и выигрывай!
            </h2>
          </div>
          <p className={styles.event__desc}>
            Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть
            консоль <span>Xbox Series X</span> или{' '}
            <span>Sony PlayStation 5!</span> Заполни форму ниже и приложи
            скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля.
            Удачи! ;)
          </p>

          <div className={styles.event__fallback}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Как тебя зовут?"
                {...register('firstname', {
                  required: true,
                  maxLength: {
                    value: 30,
                    message: 'Не должно быть больше 30-ти символов',
                  },
                })}
                error={errors?.firstname}
              />
              <Input
                placeholder="Твой e-mail"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректная почта',
                  },
                })}
                error={errors?.email}
              />
              <FilePicker />

              <Button type="submit" primary>
                Отправить
              </Button>

              <Checkbox
                className={styles.checkbox}
                label="Согласен на обработку персональных данных"
                {...register('checked', { required: true })}
                error={errors?.checked}
              />
            </form>
            <img src={IMAGES.console} alt="console" />
          </div>
        </div>
      </div>
      <img src={IMAGES.dotsLineDown} alt="dots" className={styles.dots} />
    </>
  );
};
