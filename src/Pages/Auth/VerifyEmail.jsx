import React, { useState } from "react";
import classes from "./Reset.module.css";

import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const VerifyEmail = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const history = useHistory();

  const handleEmailVerification = e => {
    e.preventDefault();
    if (!isEmailVerified) {
      setIsEmailVerified(true);
      alert("Email verified");

      history.push("/auth/new-password");
    }
  };

  return (
    <div className={classes.reset}>
      <div className={classes.reset__heading}>
        <h3>Check your email</h3>
        <p>We sent a password reset link to your email.</p>
      </div>
      <div className={classes.reset__form}>
        <form onSubmit={handleEmailVerification}>
          <div className={classes.reset__btn}>
            <button type='submit' onClick={handleEmailVerification}>
              Open email app
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

export default VerifyEmail;
