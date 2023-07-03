import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import initialContactsData from '../contacts.json';

// const contacts = contactsData;

export class App extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };


  state = {
    contacts: [],
    filter: '',

  }

  handleAddContact = data => {
    const isExistingContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExistingContact) {
      return alert(`${data.name} is already in contact`);
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  }

  handleRemoveContact = contactId => {
    this.setState ({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    })
  }

  handleFilterByName = event => {
    this.setState({
      filter: event.target.value,
    });
  }

  componentDidMount() {
    const stringifyContacts = localStorage.getItem('contacts');
    const localStorageContacts = JSON.parse(stringifyContacts);
    if (localStorageContacts && localStorageContacts.length > 0) {
      this.setState({
        contacts: localStorageContacts,
      });
    } else {
      this.setState({
        contacts: initialContactsData,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact}/>

        <h2>Contacts</h2>
        <Filter onFilterChange={this.handleFilterByName} filter={this.state.filter}/>
        <ContactList onRemoveContact={this.handleRemoveContact} contacts={filteredContacts} />
      </div>
    )
  }
}


