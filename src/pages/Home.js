import { Stack, Typography } from '@mui/material';
import simpleImage from '../image/contacts-img.png';

const Home = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Typography variant="h1">
        Welcome to our contact management platform!
      </Typography>
      <div>
        <Typography variant="p">
          We're delighted to have you here. This is your space to effortlessly
          save and organize your contacts. To get started, simply log in and
          begin streamlining your connections. Let's make managing your contacts
          a breeze
        </Typography>
        <img src={simpleImage} alt="Contacts" />
      </div>
    </Stack>
  );
};

export default Home;
