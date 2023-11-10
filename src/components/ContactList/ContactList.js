import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, deleteCard }) => {
  return (
    <List>
      {contacts.map(item => (
        <Item key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button onClick={() => deleteCard(item.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
