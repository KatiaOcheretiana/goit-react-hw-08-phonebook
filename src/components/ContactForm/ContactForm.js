import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  phone: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Invalid number format (e.g., xxx-xx-xx)'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const isNameRepeat = contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameRepeat) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: newContact.name,
        number: newContact.phone,
      })
    );
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
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
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" component="span" />
        </label>
        {/* <Button type="submit">Add contact</Button> */}
        <Button
          startIcon={<GroupAddOutlinedIcon />}
          size="medium"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
