import React from 'react';

const FormikTextInput = ({ field, form: { touched, errors }, label, ...props }) => {
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...props} {...field} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default FormikTextInput;
