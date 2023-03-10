import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';

import { deleteContact } from '../../redux/features/contacts/contactsOperations';

import { ListItem, Wrapper, DeleteButton, Text } from './ContactItem.styled';

const ContactItem = ({ contactName, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Wrapper>
        <IoMdContact />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Text>{contactName}:</Text>
          <Text>{number}</Text>
        </div>
      </Wrapper>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <AiFillDelete width="20px" height="20px" />
      </DeleteButton>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
