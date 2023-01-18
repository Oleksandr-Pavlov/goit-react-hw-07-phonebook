import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import css from '../ContactsList/ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
