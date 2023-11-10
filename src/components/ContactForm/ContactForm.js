import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage, Button } from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Invalid number format (e.g., xxx-xx-xx)'
    )
    .required('Number is required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
