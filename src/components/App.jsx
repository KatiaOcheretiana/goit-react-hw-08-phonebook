import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContact = prevState.contacts;
    const newContact = this.state.contacts;

    if (prevContact !== newContact) {
      localStorage.setItem(storageKey, JSON.stringify(newContact));
    }
  }

  handleAddContactToList = newContact => {
    const isNameRepeat = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameRepeat) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contact = { ...newContact, id: nanoid() };
    this.setState(prev => {
      return { contacts: [...prev.contacts, contact] };
    });
  };

  searchContactByName = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(item => {
      return item.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContactToList}
          checkName={this.isNameRepeat}
        />
        <h2>Contacts</h2>
        <Filter searchContact={this.searchContactByName} />
        <ContactList
          contacts={visibleContacts}
          deleteCard={this.deleteContact}
        />
      </Section>
    );
  }
}
