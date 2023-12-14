import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const canRedirect = !isLoggedIn && !isRefreshing;
  return canRedirect ? <Navigate to={redirectTo} /> : Component;
};
