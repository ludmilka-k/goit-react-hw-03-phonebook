import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
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
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    })
  }

  handleFilterByName = event => {
  this.setState({ filter: event.target.value });
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
