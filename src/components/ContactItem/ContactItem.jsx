import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact__item} id={id}>
      <p className={css.contact__name}>{name}:</p>
      <span className={css.contact__number}>
        {number}
        <button
          className={css.contact__btn}
          type="button"
          onClick={() => dispatch(delContact(id))}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
