import React from 'react';
import { Input } from '../input';
import styles from './Formik.module.css';

export interface FormikInputProps {
  formik: any;
  name: string;
  label?: string;

  [key: string]: any;
}

export default function FormikInput({
  label,
  name,
  formik,
  ...other
}: FormikInputProps) {
  return (
    <div className={styles.formGroup}>
      <Input
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
