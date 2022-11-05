import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../Contact/Contact';
import {
  deleteContact,
  getFilter,
  getContacts,
} from '../../redux/contactsSlice';
import { AddedСontacts } from './ContactList.styled';

export const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));

  const contactsFilter = () => {
    const filterNormalize = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filteredContacts = contactsFilter();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <AddedСontacts key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactID={id}
            />
          </AddedСontacts>
        );
      })}
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};
