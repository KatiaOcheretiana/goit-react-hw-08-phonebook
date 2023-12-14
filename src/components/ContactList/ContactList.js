import { Loader } from 'components/Loader';
import { List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
        {contactsByFilter.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <IconButton
              aria-label="delete"
              color="secondary"
              size="small"
              onClick={() => handleDelete(id)}
            >
              <DeleteIcon />
            </IconButton>
          </Item>
        ))}
      </List>
    </>
  );
};
