import React, { useState } from "react";
import classes from "./Reset.module.css";

import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const history = useHistory();

  const handleNewPassword = e => {
    e.preventDefault();

    // Condition to check if both newPassword and confirmNewPassword are same
    const isPasswordValid = (newPassword, confirmNewPassword) => {
      const STRONG_PASSWORD_LENGTH = 8;

      if (newPassword || confirmNewPassword) {
        if (confirmNewPassword === newPassword) {
          if (newPassword || confirmNewPassword <= STRONG_PASSWORD_LENGTH) {
            alert("Password(s) are too short and unsecure.");
            return false;
          }
          alert("Password successfully reset");
          history.push("/auth/reset-success");
        } else {
          alert("Passwords do not match");
          return false;
        }
      } else {
        alert("Please enter your new password");
      }
    };

    isPasswordValid(newPassword, confirmNewPassword);
  };
  return (
    <div className={classes.reset}>
      <div className={classes.reset__heading}>
        <h3>Set new password</h3>
        <p>Your new password must be different to previuosly used passwords.</p>
      </div>
      <div className={classes.reset__form}>
        <form onSubmit={handleNewPassword}>
          <div className={classes.reset__form_label}>
            <label htmlFor='new-password'>Password</label>
            <input
              type='password'
              id='new-password'
              name='new-password'
              value={newPassword}
              required
              placeholder='New password'
              onChange={e => setNewPassword(e.target.value)}
            />
          </div>
          <div className={classes.reset__form_label}>
            <label htmlFor='confirm-password'>Confirm password</label>
            <input
              type='password'
              id='confirm-password'
              name='confirm-password'
              value={confirmNewPassword}
              required
              placeholder='Confirm new password'
              onChange={e => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <div className={classes.reset__btn}>
            <button type='submit' onClick={handleNewPassword}>
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

export default NewPassword;
