import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.container}>
      <div className={css.info}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
