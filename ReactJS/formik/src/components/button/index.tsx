import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  onClick,
  disabled = false,
  ...other
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={disabled}
      className={clsx(styles.button, { [styles.disabled]: disabled })}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
}
