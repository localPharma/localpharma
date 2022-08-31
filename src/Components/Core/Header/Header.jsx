/* eslint-disable no-unused-vars */
import React from "react";

// STYLES
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AppContext";
import User from "../User/User";

const Header = () => {
  const { currentUser } = useAuth();

  const user = currentUser;

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
