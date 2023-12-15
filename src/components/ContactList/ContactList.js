import { Loader } from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contactsByFilter = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <Box>
      {error && <b>Something went wrong... Try reloading the page </b>}
      {isLoading && !error && <Loader />}
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {contactsByFilter.map(({ id, name, number }) => (
          <ListItem
            key={id}
            disableGutters
            secondaryAction={
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${name}: ${number}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
