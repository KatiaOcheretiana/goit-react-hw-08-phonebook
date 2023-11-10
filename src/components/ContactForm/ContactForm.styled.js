import styled from 'styled-components';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  margin: 24px 0;
  padding: 20px;
  display: flex;
  width: 290px;
  gap: 20px;
  flex-direction: column;
  border: 2px solid;
  border-color: green;
`;

export const Field = styled(FormikField)`
  margin-top: 10px;
  width: 100%;
  padding: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 12px;

  &:hover,
  &:focus {
    background-color: greenyellow;
  }
`;
