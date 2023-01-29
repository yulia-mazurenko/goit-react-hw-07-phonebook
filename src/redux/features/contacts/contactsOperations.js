import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63a86510f4962215b58149cf.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { getState, rejectWithValue }) => {
    try {
      const contacts = getState().contacts.contacts.items;

      const contactToAdd = {
        name,
        number,
      };

      if (!contacts.some(contact => contact.name === contactToAdd.name)) {
        const { data } = await axios.post(`/contacts`, contactToAdd);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${params}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
