import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Spinner } from './Spinner/Spinner';
import { useEffect } from 'react';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import css from './App.module.css'

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {error ? (
        <h1>Something went wrong, please reload the page.</h1>
      ) : (
        <>
          <h1>Phonebook</h1>
          <Form />
        </>
      )}

      {isLoading && <Spinner />}

      {!isLoading && contacts.length === 0 && <h2>There are no contacts yet</h2>}

      {contacts.length > 0 && (
        <>
          <h2>Your contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </div>
  );
}
