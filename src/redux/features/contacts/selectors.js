export const selectFilteredContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();

  return state.contacts.contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};

export const getLoadingStatus = state => state.contacts.contacts.isLoading;
export const getErrorStatus = state => state.contacts.contacts.error;
