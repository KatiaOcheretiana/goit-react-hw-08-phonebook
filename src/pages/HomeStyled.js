import { Box, Container, Typography } from '@mui/material';
import styled from 'styled-components';

export const BoxField = styled(Box)(({ theme }) => ({
  gap: '20px',
  fontSize: '12px',
  lineHeight: '26px',
  letterSpacing: '0.46px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    gap: '40px',
    fontSize: '24px',
  },
}));

export const Title = styled(Typography)`
  font-family: 'Ubuntu', sans-serif;
  font-size: 70px;
  font-weight: bold;
  color: rgba(16, 20, 38, 1);
  text-align: center;
  letter-spacing: 5px;
  text-shadow: -1px 1px 0 #d7dff4, 1px 1px 0 rgba(51, 102, 255, 1),
    1px -1px 0 #42afac, -1px -1px 0 #c6c23f;
`;

export const HomeContainer = styled(Container)({
  marginTop: '40px',
});

export const Image = styled.img(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '200px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '300px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '500px',
  },
}));
