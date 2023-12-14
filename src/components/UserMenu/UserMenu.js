import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.email}</p>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
