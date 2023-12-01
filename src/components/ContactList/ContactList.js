import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
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
