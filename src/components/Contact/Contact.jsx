import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { handleMouseDown, handleMouseUp } from '../../utils/HandleMouse';
import { ContactData, Number, Button, Icon } from './Contact.styled';
import { FaTrash, FaUserTie } from 'react-icons/fa';

export const Contact = ({ name, number, contactId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactData>
        <Icon>
          <FaUserTie />
        </Icon>
        <p>{name}</p>
      </ContactData>
      <ContactData>
        <Number>{number}</Number>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contactId))}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <FaTrash />
        </Button>
      </ContactData>
    </>
  );
};

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
