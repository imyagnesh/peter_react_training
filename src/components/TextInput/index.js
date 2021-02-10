import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 10px;
  &:focus: {
    border: 3px solid #555;
  }
`;

const TextInput = forwardRef(({ ...rest }, ref) => {
  return <Input ref={ref} type="text" {...rest} />;
});

export default TextInput;
