import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
import classes from "./User.module.css";
import { useAuth } from "../../../ContextAPI/AppContext";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import UserAvatar from "./UserAvatar";

const User = () => {
  const [openUserStatus, setOpenUserStatus] = useState(false);
  const { currentUser, logout } = useAuth();

  const user = currentUser;
  const location = useLocation();

  const { displayName, photoUrl } = user;

  const handleSignout = () => {
    logout()
      .then((_) => location.replace("/"))
      .catch((err) => console.log(err.message));
  };

  const handleUserDisplay = () => {
    setOpenUserStatus(!openUserStatus);
  };
  return (
    <div className={classes.user}>
      <div className={classes.user__btn} onClick={handleUserDisplay}>
        <UserAvatar displayName={displayName} photoUrl={photoUrl} />
      </div>

      {/* User dropdown */}
      {openUserStatus && (
        <>
          <div className={classes.dropdown}>
            <div className={classes.dropdown__wrapper}>
              <div className={classes.dropdown__info}>
                <UserAvatar displayName={displayName} photoUrl={photoUrl} />
              </div>
              {/* Links */}
              <Link to="/profile">
                Edit Profile
                <span>
                  <FaChevronRight />
                </span>
              </Link>
              <Link to="/history">
                History
                <span>
                  <FaChevronRight />
                </span>
              </Link>
              <Link to="/settings">
                Settngs and Privacy
                <span>
                  <FaChevronRight />
                </span>
              </Link>
              <button
                type="button"
                className={classes.signout__btn}
                onClick={handleSignout}
              >
                Log out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
