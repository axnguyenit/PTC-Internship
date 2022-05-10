import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  label?: string;
  name: string;

  [key: string]: any;
}

export default function Input({ name, label, ...other }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} className={styles.input} {...other} />
    </div>
  );
}
