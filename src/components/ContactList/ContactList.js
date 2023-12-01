import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(item => (
        <Item key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button onClick={() => dispatch(deleteContact(item.id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
