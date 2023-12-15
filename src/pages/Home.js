import { Typography } from '@mui/material';
import simpleImage from '../image/people-talking.avif';
import { BoxField, HomeContainer, Image } from './HomeStyled';

const Home = () => {
  return (
    <HomeContainer>
      <Typography variant="h3" sx={{ marginBottom: '20px' }}>
        Welcome to our contact management platform!
      </Typography>
      <BoxField>
        <Typography variant="p">
          We're delighted to have you here. This is your space to effortlessly
          save and organize your contacts. To get started, simply log in and
          begin streamlining your connections. Let's make managing your contacts
          a breeze
        </Typography>
        <Image src={simpleImage} alt="Contacts" />
      </BoxField>
    </HomeContainer>
  );
};

export default Home;
