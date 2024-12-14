import React from 'react';
import cn from 'classnames';
import { CheckIcon } from '../../Icons/Check';
import styles from './Checkbox.module.scss';

export const Checkbox = ({
  className,
  checked,
  type,
  error,
  label,
  ...props
}) => {
  return (
    <div>
      <label className={cn(styles.checkbox, className)}>
        <div className={styles.checkbox__container}>
          <input
            type="checkbox"
            className={styles.checkbox__input}
            {...props}
          />
          <span className={styles.checkbox__mark}>
            <CheckIcon className={styles.checkbox__icon} />
          </span>
        </div>
        <span className={styles.checkbox__label}>{label}</span>
      </label>
      {error && (
        <div className={styles.checkbox__error}>
          {error?.message ? error?.message : 'Обязательное поле'}
        </div>
      )}
    </div>
  );
};
