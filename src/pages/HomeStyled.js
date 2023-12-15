import { Box, Container } from '@mui/material';
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

export const HomeContainer = styled(Container)({
  marginTop: '24px',
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
