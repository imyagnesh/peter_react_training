import React, { useEffect, useState } from 'react';

const FormikSelect = ({ field, form: { touched, errors, values }, label, options, ...props }) => {
  const [list, setList] = useState(options);

  useEffect(() => {
    if (props.mapto) {
      console.log('check data');
      //   setList(list.filter(x => x[props.mapTo] === values[props.mapTo]));
    }
  }, [values[props.mapto]]);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <select {...props} {...field}>
        {list.map((x, i) => (
          <option key={i} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default FormikSelect;
