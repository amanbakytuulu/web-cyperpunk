import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ children, primary, className, ...props }) => {
  return (
    <button
      className={cn(styles.btn, { [styles.primary]: primary }, className)}
      {...props}
    >
      {children}
    </button>
  );
};
