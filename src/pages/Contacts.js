import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Section } from 'components/App.styled';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Section>
  );
};
