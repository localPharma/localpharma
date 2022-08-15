import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// STYLES
import classes from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const [isAuthLinkVisible, setIsAuthLinkVisible] = useState(true);

  useEffect(() => {
    // alert(`Currently viewing '${location.pathname}' page`);

    const verifypage = "/auth/verify";
    const resetpassword = "/auth/reset-password";
    const newpassword = "/auth/new-password";
    const resetcomplete = "/auth/reset-complete";
    const signin = "/auth/signin";
    const signup = "/auth/signup";

    // Checking if current location is either signup, signin, reset password, verify email etc..
    const unsubscribe = () => {
      if (
        location.pathname === resetpassword ||
        location.pathname === verifypage ||
        location.pathname === newpassword ||
        location.pathname === resetcomplete ||
        location.pathname === signin ||
        location.pathname === signup
      ) {
        setIsAuthLinkVisible(!isAuthLinkVisible);
      }
    };

    return () => {
      unsubscribe();
    };
  }, [location, isAuthLinkVisible]);

  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <Link to='/'>
          Local<span>Pharma.</span>
        </Link>
      </div>
      {/* Auth */}
      <div className={classes.auth} id='auth'>
        {isAuthLinkVisible ? (
          <>
            <Link to='/auth/signin' className={classes.login}>
              Sign In
            </Link>
            <Link to='/auth/signup' className={classes.signup}>
              Create an account
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
