/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AppContext";
import Header from "../../../Components/Core/Header/Header";
import classes from "./Vendor.module.css";

const Vendorsignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { register, loginWithGoogle } = useAuth();

  // Email and Password Signup Functionality
  const handleSignupWithEmailAndPassword = e => {
    e.preventDefault();

    register(email, password)
      .then(userCredentials => {
        console.log(userCredentials);
        history.replace("/");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  // Google Authenticaton Functionality
  const handleSignupWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        history.replace("/");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <>
      <Header />
      <div className={classes.vendor__signup}>
        <div className={classes.pharma__title}>
          <h2>Welcome to LocalPharma.</h2>
        </div>
        <form onSubmit={handleSignupWithEmailAndPassword}>
          {/* <div className={classes.form__heading}>
            <h3>Open a pharmacy</h3>
            <p>Let's get started with your pharmacy creation.</p>
          </div> */}
          <div className={classes.form__labels}>
            {/* <div className={classes.form__group}>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  placeholder='Enter your username'
                />
              </div> */}
            <div className={classes.form__group}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder='Enter your email'
              />
            </div>
            <div className={classes.form__group}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder='Enter your password'
              />
            </div>
          </div>
          <button className={classes.auth__btn}>Open a pharmacy</button>
        </form>

        {/* Third-party Auth */}
        <div className={classes.third__party_auth}>
          <button
            type='button'
            className={classes.google__auth}
            onClick={handleSignupWithGoogle}>
            Sign in with Google
          </button>
        </div>

        {/* Dont have an account */}
        <div className={classes.account__link}>
          <p>
            Already have an account?
            <span>
              <Link to='/auth/login-pharmacy'>Login here.</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Vendorsignup;
