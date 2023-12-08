import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsByFilter = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
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
  );
};
