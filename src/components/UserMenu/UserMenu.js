import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/selectors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ButtonOut, UserBox, UserInfo } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBox>
      <UserInfo>
        <AccountCircleIcon
          src="/broken-image.jpg"
          sx={
            ({ alignContent: 'center' },
            { display: { xs: 'none', sm: 'block' } })
          }
        />
        <p>{user.email}</p>
      </UserInfo>
      <ButtonOut variant="contained" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonOut>
    </UserBox>
  );
};
