import { addNotifications } from '../notifications/notificationsSlice';

export const notificationsMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    const contacts = getState().contacts.contacts.items;

    if (action.type === 'contacts/addContact/fulfilled') {
      if (
        !contacts.some(
          contact =>
            contact.name === action.meta.arg.name ||
            contact.number === action.meta.arg.number
        )
      ) {
        dispatch(addNotifications(`Contact ${action.payload.name} was added`));
        next(action);
        return;
      }

      if (contacts.some(contact => contact.name === action.meta.arg.name)) {
        dispatch(
          addNotifications(`${action.meta.arg.name} is already in contacts`)
        );
        dispatch({ type: 'contacts/addContact/rejected' });
        return;
      }

      if (contacts.some(contact => contact.number === action.meta.arg.number)) {
        dispatch(
          addNotifications(
            `Contact with number ${action.meta.arg.number} is already in contacts`
          )
        );
        dispatch({ type: 'contacts/addContact/rejected' });

        return;
      }
    }

    if (action.type === 'contacts/deleteContact/fulfilled') {
      const contactToDelete = contacts.find(
        contact => contact.id === action.payload.id
      );

      dispatch(addNotifications(`Contact ${contactToDelete.name} was deleted`));
    }

    next(action);
  };
