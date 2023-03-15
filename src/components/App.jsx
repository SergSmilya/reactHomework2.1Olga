import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';

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

  updateState = values => {
    this.setState(({ contacts }) => ({ contacts: [values, ...contacts] }));
  };

  onDeleteClick = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(ob => ob.id !== id),
    }));
  };

  checkName = name => {
    return this.state.contacts.find(ob => name === ob.name);
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.attributes.name.ownerElement.value.toLowerCase(),
    });
  };

  onFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <Input updateState={this.updateState} checkName={this.checkName} />

        <Filter onFilterChange={this.onFilterChange} />

        <Contacts
          onDeleteClick={this.onDeleteClick}
          contacts={this.onFilter()}
        />
      </div>
    );
  }
}
