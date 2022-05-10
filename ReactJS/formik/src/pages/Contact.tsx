import { useFormik } from 'formik';
import React from 'react';
import Button from '../components/button';
import {
  FormikInput,
  FormikProvider,
  FormikTextarea,
} from '../components/formik';
import { validateValuesByRule, validationRules } from '../utils';
import './styles.css';

export interface ContactProps {}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact(props: ContactProps) {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validate: (values: FormValues) => {
      return validateValuesByRule({
        firstName: validationRules.required,
        lastName: validationRules.required,
        email: validationRules.email,
        message: validationRules.required,
      })(values);
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitting(true);
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm({
        values: initialValues,
      });
    },
  });

  return (
    <div className='container'>
      <div style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message</p>
      </div>
      <div className='row'>
        <div className='column'>
          <img
            src='https://www.w3schools.com/w3images/map.jpg'
            style={{ width: '100%' }}
          />
        </div>
        <div className='column'>
          <FormikProvider onSubmit={formik.handleSubmit}>
            <FormikInput
              label='First Name'
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Your name...'
              formik={formik}
            />

            <FormikInput
              label='Last Name'
              name='lastName'
              id='lastName'
              type='text'
              placeholder='Your last name...'
              formik={formik}
            />

            <FormikInput
              label='Email'
              name='email'
              type='email'
              id='email'
              placeholder='Your email...'
              formik={formik}
            />

            <FormikTextarea
              label='Message'
              name='message'
              placeholder='Write something...'
              style={{ height: '170px' }}
              defaultValue=''
              formik={formik}
            />
            <Button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Send
            </Button>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
