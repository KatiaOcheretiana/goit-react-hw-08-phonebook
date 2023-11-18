import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';

const storageKey = 'contacts';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContactToList = newContact => {
    const isNameRepeat = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameRepeat) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const contact = { ...newContact, id: nanoid() };
    setContacts(prev => [...prev, contact]);
  };

  const searchContactByName = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(item => item.id !== contactId));
  };

  const getVisibleContacts = () =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContactToList} />
      <h2>Contacts</h2>
      <Filter searchContact={searchContactByName} />
      <ContactList contacts={visibleContacts} deleteCard={deleteContact} />
    </Section>
  );
};
