import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>Loading..</h2>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
