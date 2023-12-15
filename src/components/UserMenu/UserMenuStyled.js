import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const UserBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'center',
  fontSize: '12px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    flexDirection: 'row',
    gap: '10px',
  },
}));
export const ButtonOut = styled(Button)(({ theme }) => ({
  width: '40px',
  height: '18px',
  lineHeight: '26px',
  letterSpacing: '0.46px',
  textTransform: 'uppercase',
  color: theme.palette.primary.accent,
  [theme.breakpoints.up('sm')]: {
    width: '100px',
    height: '42px',
    fontWeight: ' 500',
  },
  [theme.breakpoints.up('md')]: {
    width: '140px',
    height: '42px',
    fontWeight: ' 500',
  },
}));

export const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '4px 8px',
  gap: '8px',
  alignContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '10px',
  fontWeight: '500',
  borderRadius: '4px',
  background: ' rgba(245, 245, 245, 0.05)',
  [theme.breakpoints.up('sm')]: {
    padding: '8px 16px',
    gap: '16px',
    fontSize: '15px',
  },
}));
