// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AppContext";
import User from "../User/User";

// STYLES
import classes from "./Header.module.css";

const Header = () => {
  // const location = useLocation();
  // const [isAuthLinkVisible, setIsAuthLinkVisible] = useState(true);

  const { currentUser } = useAuth();

  const user = currentUser;

  // useEffect(() => {
  //   const verifypage = "/auth/verify";
  //   const resetpassword = "/auth/reset-password";
  //   const newpassword = "/auth/new-password";
  //   const resetcomplete = "/auth/reset-complete";
  //   const signin = "/auth/signin";
  //   const signup = "/auth/signup";

  //   // Checking if current location is either signup, signin, reset password, verify email etc..
  //   if (
  //     location.pathname === resetpassword ||
  //     location.pathname === verifypage ||
  //     location.pathname === newpassword ||
  //     location.pathname === resetcomplete ||
  //     location.pathname === signin ||
  //     location.pathname === signup
  //   ) {
  //     setIsAuthLinkVisible(!isAuthLinkVisible);
  //   }
  // }, [location, isAuthLinkVisible]);

  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <Link to='/'>
          Local<span>Pharma.</span>
        </Link>
      </div>
      {/* Auth */}
      <div className={classes.auth} id='auth'>
        {user ? (
          <User />
        ) : (
          <>
            <Link to='/auth/signin' className={classes.login}>
              Sign In
            </Link>
            <Link to='/auth/signup' className={classes.signup}>
              Create an account
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
