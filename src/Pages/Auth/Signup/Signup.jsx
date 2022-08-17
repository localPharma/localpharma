import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Signup.module.css";
import { useAuth } from "../../../ContextAPI/AppContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { register, loginWithGoogle } = useAuth();

  // Email and Password Signup Functionality
  const handleSignupWithEmailAndPassword = e => {
    e.preventDefault();

    try {
      register(email, password).then(userCredentials => {
        console.log(userCredentials);
        history.replace("/");
      });
    } catch (err) {
      alert(err.message);
    }
    alert("Registered");
  };

  // Google Authencticaton Functionality
  const handleSignupWithGoogle = () => {
    loginWithGoogle()
      .then(user => console.log(user))
      .catch(err => {
        alert(err.message);
      });
    // .catch(err => console.log(err.message));
  };

  return (
    <div className={classes.signup__page}>
      <div className={classes.form__wrapper}>
        {/* Form */}
        <div className={classes.form__container}>
          <form onSubmit={handleSignupWithEmailAndPassword}>
            <div className={classes.form__heading}>
              <h3>Create an account</h3>
              <p>Let's get started with your account creation.</p>
            </div>
            <div className={classes.form__labels}>
              <div className={classes.form__group}>
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
              </div>
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
            <button className={classes.auth__btn}>Create account</button>
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
              Already have an account?{" "}
              <span>
                <Link to='/auth/signin'>Sign in</Link>
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

export default Signup;