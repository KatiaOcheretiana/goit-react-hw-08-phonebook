import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logOut)}>
        Logout
      </button>
    </div>
  );
};
