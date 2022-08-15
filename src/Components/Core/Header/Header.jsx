import React from "react";
import { Link } from "react-router-dom";

// STYLES
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <Link to='/'>
          Local<span>Pharma.</span>
        </Link>
      </div>
      {/* Auth */}
      <div className={classes.auth} id='auth'>
        <Link to='/auth/signin' className={classes.login}>
          Sign In
        </Link>
        <Link to='/auth/signup' className={classes.signup}>
          Create an account
        </Link>
      </div>
    </header>
  );
};

export default Header;
