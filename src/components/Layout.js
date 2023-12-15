import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Box>
      <Navigation />
      <Suspense fallback={<h2>Loading..</h2>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
