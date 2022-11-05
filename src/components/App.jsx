// import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { getContacts } from '../redux/contactsSlice';
import { AiOutlineRead } from 'react-icons/ai';
import { Container, ContainerTitle, SubHeading, IconTitle } from './App.styled';

export const App = () => {
  // const contacts = useSelector(getContacts);
  // console.log(contacts);
  return (
    <Container>
      <ContainerTitle>
        Phonebook
        <IconTitle>
          <AiOutlineRead />
        </IconTitle>
      </ContainerTitle>
      <ContactForm />

      <SubHeading>Contacts</SubHeading>
      <Filter />

      <ContactList />
    </Container>
  );
};
