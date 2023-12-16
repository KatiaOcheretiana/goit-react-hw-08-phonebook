import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import { Box } from '@mui/material';

export const BoxField = styled(Box)({
  width: '100%',
  margin: '30px 0',
  borderRadius: '8px',
  border: '2px solid rgba(70, 81, 124, 0.5)',
  backgroundColor: 'rgba(16, 20, 38, 1)',
});

export const Form = styled(FormikForm)`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  color: #d7dff4;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
`;

export const Field = styled(FormikField)`
  margin-top: 10px;
  width: 100%;
  padding: 4px;
  &.focus {
    border-color: blue;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 12px;
`;
