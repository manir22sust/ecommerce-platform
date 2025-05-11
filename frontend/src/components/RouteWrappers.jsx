import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const PrivateRoute = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
    // You can also show a loading spinner or skeleton here
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export const RestrictedRoute = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return !user ? <Outlet /> : <Navigate to="/" replace />;
};
