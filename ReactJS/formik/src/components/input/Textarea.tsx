import React from 'react';
import styles from './Input.module.css';

export interface TextareaProps {
  label?: string;
  name: string;

  [key: string]: any;
}

export default function Textarea({ name, label, ...other }: TextareaProps) {
  return (
    <>
      <label htmlFor='subject'>{label}</label>
      <textarea name={name} className={styles.input} {...other} />
    </>
  );
}
