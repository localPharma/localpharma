import React from "react";
import classes from "./Reset.module.css";

import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const ResetComplete = () => {
  const history = useHistory();

  const handleResetSuccess = () => {
    history.replace("/auth/signin");
  };
  return (
    <div className={classes.reset}>
      <div className={classes.reset__heading}>
        <h3>Password reset success</h3>
        <p>
          Your password has been successfully reset. Click continue to signin
          automatically.
        </p>
      </div>
      <div className={classes.reset__form}>
        <form onSubmit={handleResetSuccess}>
          <div className={classes.reset__btn}>
            <button type='submit' onClick={handleResetSuccess}>
              Continue to app
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

export default ResetComplete;
