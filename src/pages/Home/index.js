import { Formik, Field } from 'formik';
import React, { useState } from 'react';
import axios from '../../utils/axios';
import Form from '../../components/Form';
import FormikSelect from '../../components/FormikSelect';
import FormikTextInput from '../../components/FormikTextInput';
import { fields, initialValues } from './fields';

const category = [
  { value: '', text: 'Select Category' },
  { value: 'mobile', text: 'Mobile' },
  { value: 'computer', text: 'Computer' },
];

const Home = ({ history, location }) => {
  const onSubmit = async (values, action) => {
    console.log(action);
    try {
      const res = await axios.post('products', values);
    } catch (error) {
      action.setFieldError('server', error.message);
    }
    action.resetForm(initialValues);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Form initialValues={initialValues} fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Home;
