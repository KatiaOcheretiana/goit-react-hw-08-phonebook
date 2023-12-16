import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Box } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <Box>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster top="100" position="top-right" reverseOrder={false} />
    </Box>
  );
};
