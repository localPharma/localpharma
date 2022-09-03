/* eslint-disable no-unused-vars */
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

// STYLES
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AppContext";
import User from "../User/User";
import { useCart } from "../../../ContextAPI/CartContext";

const Header = () => {
  const { currentUser } = useAuth();
  const items = useCart();

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
          <>
            <Link to="/cart">{/* <FaBasket /> */}</Link>
            <User />
          </>
        ) : (
          <>
            <Link to="/cart"><FaShoppingCart />({items.length})</Link>
            {/* <Link to="/favourites">Favourites ({items.length})</Link> */}
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
    // FaShoppingBag
// FaShoppingBasket
// FaShoppingCart
  );
};

export default Header;
