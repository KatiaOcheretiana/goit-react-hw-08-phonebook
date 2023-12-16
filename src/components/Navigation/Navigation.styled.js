import { Box, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  padding: '8px 6px',
  gap: '20px',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.dark,
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  listStyle: 'none',
  fontSize: '10px',
  fontWeight: '500',
  lineHeight: '26px',
  letterSpacing: '0.46px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  '&.active': {
    color: theme.palette.primary.accent,
  },
  '&:hover': {
    color: theme.palette.primary.accent,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
  },
}));

export const BoxNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  [theme.breakpoints.up('sm')]: {
    gap: '40px',
  },
}));
