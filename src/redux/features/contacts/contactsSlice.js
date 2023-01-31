import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

//Case reducers

const fetchContactsSuccessReducer = (state, { payload }) => {
  state.contacts.items = payload;
};

const addContactSuccessReducer = (state, { payload }) => {
  state.contacts.items.push(payload);
};

const deleteContactSuccessReducer = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== payload.id
  );
};

const pendingReducer = state => {
  state.contacts.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const fulfilledReducer = state => {
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
