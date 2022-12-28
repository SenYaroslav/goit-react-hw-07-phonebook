import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contacts } from 'redux/selectors';
import { filter } from 'redux/selectors';
import { fetchAll } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(filter);
  const { items, isLoading, error } = useSelector(contacts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const getVisibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filtered)
  );

  return (
    <>
      <div>
        {isLoading && <p>Loading contscts...</p>}
        {error && <p>{error}</p>}
      </div>
      {getVisibleContacts && (
        <ul className={css.contacts__list}>
          {getVisibleContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
