import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { AddedСontacts } from './ContactList.styled';
import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function filteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <ul>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <AddedСontacts key={id}>
            <Contact
              name={name}
              number={number}
              // onDeleteContact={onDeleteContact}
              contactId={id}
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
