import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, Container } from '@mui/material';
import { selectContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      sx={{ width: { xs: '300px', md: '400px' }, margin: '30px auto' }}
    >
      <Box>
        <h2>Use form to add new contacts</h2>
        <ContactForm />
      </Box>
      {contacts.length >= 1 && (
        <Box>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      )}
    </Container>
  );
};

export default Contacts;
