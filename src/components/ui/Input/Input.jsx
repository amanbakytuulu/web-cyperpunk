import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export const Input = ({
  type = 'text',
  autoComplete = 'off',
  error,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        type={type}
        autoComplete={autoComplete}
        className={cn(styles.input, className)}
        {...props}
      />
      {error && (
        <div className={styles.error}>
          {error?.message ? error?.message : 'Обязательное поле'}
        </div>
      )}
    </div>
  );
};
