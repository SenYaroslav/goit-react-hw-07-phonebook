import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        padding: '30px',
        boxSizing: 'border-box',
        fontSize: '18px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter title="Find contacts by name" />
      <ContactList />
    </div>
  );
};

export default App;
