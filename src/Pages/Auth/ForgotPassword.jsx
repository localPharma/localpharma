import React, { useState } from "react";
import classes from "./Reset.module.css";

import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../ContextAPI/AppContext";

const Forgotpassword = () => {
  const [resetEmail, setResetEmail] = useState("");

  const history = useHistory();

  const { forgotPassword } = useAuth();

  const handlePasswordReset = e => {
    e.preventDefault();

    if (resetEmail) {
      forgotPassword(resetEmail)
        .then(res => {
          console.log("====================================");
          console.log(res);
          console.log("====================================");
          alert("Password reset sent to your email");
          history.push("/auth/verify");
        })
        .catch(err => alert(err.message));
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <div className={classes.reset}>
      <div className={classes.reset__heading}>
        <h3>Forgot Password?</h3>
        <p>No worries, we'll send you reset instructions.</p>
      </div>
      {/* <>{isSubmitted && resetEmail}</> */}
      <div className={classes.reset__form}>
        <form onSubmit={handlePasswordReset}>
          <div className={classes.reset__form_label}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={resetEmail}
              required
              placeholder='Enter your email'
              onChange={e => setResetEmail(e.target.value)}
            />
          </div>
          <div className={classes.reset__btn}>
            <button type='submit' onClick={handlePasswordReset}>
              Reset password
            </button>
          </div>
        </form>
      </div>

      {/* Go back link*/}
      <div className={classes.go__back}>
        <Link to='/auth/signin'>
          <FaArrowLeft className={classes.left__arrow} />
          Back to signin
        </Link>
      </div>
    </div>
  );
};

export default Forgotpassword;
