import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      {contacts.length > 0 ? (
        <>
          <h2>Your contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <h2>There are no contacts yet</h2>
      )}
    </div>
  );
}
