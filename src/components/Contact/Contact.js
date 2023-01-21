import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        <b>{name}:</b> {number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};
