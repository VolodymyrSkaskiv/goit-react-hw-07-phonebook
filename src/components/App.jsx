import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { MainHeader, SecondaryHeader, Section } from './App.styled';

export const App = () => {
  return (
    <Section>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SecondaryHeader>Contacts</SecondaryHeader>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" /> {/* відображення сповіщень */}
    </Section>
  );
};
