import { Stack } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Stack
        direction="row"
        spacing={4}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={2}
      >
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </Stack>
    </header>
  );
};
