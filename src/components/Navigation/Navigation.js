import { AppBar, Typography } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'redux/auth/selectors';
import { BoxNav, StyledLink, StyledToolBar } from './NavigationStyled';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <LibraryBooksOutlinedIcon />
            Phonebook
          </Typography>
          <LibraryBooksOutlinedIcon
            fontSize="large"
            color="primary"
            sx={{ display: { xs: 'block', md: 'none' } }}
          />
          <BoxNav>
            <StyledLink to="/">Home</StyledLink>
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
          </BoxNav>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <BoxNav>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </BoxNav>
          )}
        </StyledToolBar>
      </AppBar>
    </header>
  );
};
