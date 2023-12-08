import { Loader } from 'components/Loader';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contactsByFilter = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {error && <b>Something went wrong... Try reloading the page </b>}
      {isLoading && !error && <Loader />}
      <List>
        {contactsByFilter.map(({ id, name, phone }) => (
          <Item key={id}>
            <p>
              {name}: {phone}
            </p>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </Item>
        ))}
      </List>
    </>
  );
};
