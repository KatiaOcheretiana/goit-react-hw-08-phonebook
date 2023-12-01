import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contactsSlice';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Invalid number format (e.g., xxx-xx-xx)'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const isNameRepeat = contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameRepeat) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addNewContact(newContact.name, newContact.number));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleAddContact(values);
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
