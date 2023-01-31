import { useDispatch, useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';
import {
  selectFilteredContacts,
  selectLoadingStatus,
  selectErrorStatus,
} from '../../redux/features/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/features/contacts/contactsOperations';
import { Loader } from '../Loader/Loader';
import { Error } from 'components/Error/Error';

const ContactList = () => {
  const filteredFriends = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {filteredFriends?.map(({ name, number, id }) => (
          <ContactItem key={id} id={id} contactName={name} number={number} />
        ))}
      </ul>

      {isLoading && <Loader />}
      {error && <Error />}
    </>
  );
};

export default ContactList;
