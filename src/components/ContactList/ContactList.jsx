import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { contacts } from 'redux/contactsSlice';
import { filter } from 'redux/filterSlice';

const ContactList = () => {
  const contactsSelector = useSelector(contacts);
  const contactsArr = contactsSelector.contacts
  const filtered = useSelector(filter);

  const getVisibleContacts = contactsArr.filter(contact => contact.name.toLowerCase().includes(filtered),
  );

  return (
    getVisibleContacts && (
      <ul className={css.contacts__list}>
        {getVisibleContacts.map(({id, name, number}) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        ))}
      </ul>
    )
  );
};

export default ContactList;
