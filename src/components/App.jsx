import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { AiOutlineRead } from 'react-icons/ai';
import { Container, ContainerTitle, SubHeading, IconTitle } from './App.styled';

export const App = () => {
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
