import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(7),
            name,
            number,
          },
        };
      },
    },
    delContact({ contacts }, action) {
      const index = contacts.findIndex(
        contact => contact.id === action.payload
      );
      contacts.splice(index, 1);
    },
  },
});

const persistConfig = { key: 'contacts', storage };
export const persReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//Selector
export const contacts = state => state.contacts;
