/* eslint-disable no-unused-vars */
import React from "react";

// STYLES
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AppContext";
import User from "../User/User";

const Header = () => {
  const { currentUser } = useAuth();

  const user = currentUser;

  const activeStyle = {
    color: "dodgerblue",
    fontWeight: "600",
  };

  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <Link to="/">
          Local<span>Pharma.</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className={classes.nav}>
        <NavLink
          to="/products"
          className={classes.nav__link}
          activeStyle={activeStyle}
        >
          Products
        </NavLink>
        <NavLink
          to="/pharmacies"
          className={classes.nav__link}
          activeStyle={activeStyle}
        >
          Pharmacies
        </NavLink>
        <NavLink
          to="/categories"
          className={classes.nav__link}
          activeStyle={activeStyle}
        >
          Categories
        </NavLink>
        <NavLink
          to="/ask-a-doctor"
          className={classes.nav__link}
          activeStyle={activeStyle}
        >
          Ask a Doctor
        </NavLink>
        <NavLink
          to="/about"
          className={classes.nav__link}
          activeStyle={activeStyle}
        >
          About
        </NavLink>
      </nav>

      {/* Auth */}
      <div className={classes.auth} id="auth">
        {user ? (
          <User />
        ) : (
          <>
            <Link to="/auth/signin" className={classes.login}>
              Sign In
            </Link>
            <Link to="/auth/signup" className={classes.signup}>
              Create an account
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
