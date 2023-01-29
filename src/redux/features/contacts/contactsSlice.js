import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },

    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      // state.contacts.items = [...state.contacts.items, payload];
      state.contacts.items.push(payload);
      state.contacts.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },

    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== payload.id
      );

      state.contacts.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
