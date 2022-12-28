import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { contacts } from 'redux/selectors';
import { BsPersonPlusFill } from 'react-icons/bs';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { items } = useSelector(contacts);

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const nameList = items.map(contact => contact.name);

    if (nameList.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.phoneBook__form} onSubmit={handleSubmit}>
      <label className={css.phoneBook__label}>
        Name
        <input
          className={css.phoneBook__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
      </label>
      <label className={css.phoneBook__label}>
        Number
        <input
          className={css.phoneBook__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          required
        />
      </label>
      <button className={css.phoneBook__btn} type="submit">
        <BsPersonPlusFill
          size={'1.5em'}
          style={{ verticalAlign: 'bottom', marginRight: '10px' }}
        />
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
