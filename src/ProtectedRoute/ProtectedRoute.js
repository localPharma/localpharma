import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../ContextAPI/AppContext";

const ProtectedRoute = props => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const { path } = props;

  // Checking path
  if (
    path === "/auth/signin" ||
    path === "/auth/signup" ||
    path === "/auth/reset-password" ||
    path === "/auth/verify" ||
    path === "/auth/new-password" ||
    path === "/auth/reset-success"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/auth/signin"} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/auth/signin",
        state: { from: path },
      }}
    />
  );
};

export default ProtectedRoute;
