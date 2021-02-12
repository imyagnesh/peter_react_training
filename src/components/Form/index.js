import { Field, Formik } from 'formik';
import React from 'react';

const Form = ({ initialValues, fields, ...rest }) => {
  return (
    <Formik initialValues={initialValues} enableReinitialize {...rest}>
      {({ handleSubmit, isSubmitting, errors }) => (
        <form onSubmit={handleSubmit} noValidate>
          {!!errors.server && <div>{errors.server}</div>}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            {fields.map(x => (
              <Field key={x.name} {...x} />
            ))}
            <input type="submit" value="Add Product" disabled={isSubmitting} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
