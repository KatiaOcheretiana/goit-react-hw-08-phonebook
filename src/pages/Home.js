import { Typography } from '@mui/material';
import simpleImage from '../image/people-talking.avif';
import { BoxField, HomeContainer, Image, Title } from './HomeStyled';

const Home = () => {
  return (
    <HomeContainer>
      <Title variant="h3">Welcome to our contact management platform!</Title>
      <BoxField sx={{ margin: '40px' }}>
        <Typography variant="p" sx={{ paddingTop: '40px' }}>
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
