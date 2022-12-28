import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const handleFilterInput = e => {
    const value = e.currentTarget.value;
    const normalized = value.trim().toLowerCase()

    dispatch(setFilter(normalized));
  };

  return ( 
    <div className={css.filter__container}>
      <label className={css.filter__label}>
        {title}
        <input
          className={css.filter__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleFilterInput}
          required
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
