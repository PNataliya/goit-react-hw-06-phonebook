import { useSelector, useDispatch } from 'react-redux';
import {
  FormDataInput,
  EntryFieldLabel,
  InputName,
  InputArea,
  ButtonSubmit,
} from './ContactForm.styled';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const values = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    if (
      !contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      dispatch(addContact(values.name, values.number));
    } else {
      alert(`${values.name} is already in contacts`);
    }

    resetForm();
  };

  return (
    <FormDataInput initialValues={values} onSubmit={handleSubmit}>
      <EntryFieldLabel>
        <InputName>Name</InputName>
        <InputArea
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </EntryFieldLabel>
      <EntryFieldLabel>
        <InputName>Number</InputName>
        <InputArea
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </EntryFieldLabel>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </FormDataInput>
  );
};
