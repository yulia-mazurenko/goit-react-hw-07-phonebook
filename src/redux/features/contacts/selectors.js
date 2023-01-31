export const selectFilteredContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();

  return state.contacts.contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};

export const selectLoadingStatus = state => state.contacts.contacts.isLoading;
export const selectErrorStatus = state => state.contacts.contacts.error;
