import React from 'react';
import { Textarea } from '../input';
import styles from './Formik.module.css';

export interface FormikTextareaProps {
  formik: any;
  name: string;
  label?: string;

  [key: string]: any;
}

export default function FormikTextarea({
  label,
  name,
  formik,
  ...other
}: FormikTextareaProps) {
  return (
    <div className={styles.formGroup}>
      <Textarea
        name={name}
        label={label}
        {...other}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && !!formik.errors[name] && (
        <span className={styles.warning}>{formik.errors[name]}</span>
      )}
    </div>
  );
}
