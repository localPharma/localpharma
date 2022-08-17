import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AppContext";
import classes from "./Signin.module.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { login, loginWithGoogle } = useAuth();

  // Email and Password Signin Functionality
  const handleSigninWithEmailAndPassword = e => {
    e.preventDefault();

    login(email, password)
      .then(userCredentials => {
        console.log(userCredentials);
        history.replace("/");
      })
      .catch(err => {
        if (
          err.message ===
          "The password is invalid or the user does not have a password"
        ) {
          // Will use a Toast Component to display any warning or notification
          alert("Please check your credentials again.");
        } else if (
          err.message ===
          "There is no user corresponding to this identifier. The user may have been deleted."
        ) {
          // Will use a Toast Component to display any warning or notification
          alert(err.message);
        }
      });
  };

  // Google Authencticaton Functionality
  const handleSigninWithGoogle = () => {
    loginWithGoogle()
      .then(user => console.log(user))
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.signin__page}>
      <div className={classes.form__wrapper}>
        {/* Form */}
        <div className={classes.form__container}>
          <form onSubmit={handleSigninWithEmailAndPassword}>
            <div className={classes.form__heading}>
              <h3>Welcome back</h3>
              <p>Welcome back! Please enter your credentials.</p>
            </div>
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
              <div className={classes.forgot__psd}>
                <Link to='/auth/reset-password'>Forgot password?</Link>
              </div>
            </div>
            <button className={classes.auth__btn}>Sign in</button>
          </form>

          {/* Third-party Auth */}
          <div className={classes.third__party_auth}>
            <button
              type='button'
              className={classes.google__auth}
              onClick={handleSigninWithGoogle}>
              Sign in with Google
            </button>
          </div>
          {/* Dont have an account */}
          <div className={classes.account__link}>
            <p>
              Don't have an account?
              <span>
                <Link to='/auth/signup'>Create an account</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className={classes.bg__img}></div>
      </div>
    </div>
  );
};

export default Signin;
