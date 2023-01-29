import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './features/contacts/contactsSlice';
import { notificationsSlice } from '../redux/features/notifications/notificationsSlice';
import { notificationsMiddleware } from '../redux/features/notifications/notifications.middleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    notifications: notificationsSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([notificationsMiddleware]);
  },
});
