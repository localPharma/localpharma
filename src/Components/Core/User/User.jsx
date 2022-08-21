import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
import classes from "./User.module.css";
// import { useAuth } from "../../../ContextAPI/AppContext";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import UserAvatar from "./UserAvatar";

const User = () => {
  const [openUserStatus, setOpenUserStatus] = useState(false);
  // const { currentUser } = useAuth();

  // const user = currentUser;

  // const { displayName, photoUrl } = user;

  // const getInitials = displayName => {
  //   displayName
  //     .split(" ")
  //     .map(x => x.charAt(0))
  //     .join("")
  //     .substr(0, 2)
  //     .toUpperCase();
  // };

  // const handleSignout = () => {
  //   logout()
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err.message));
  // };

  const handleUserDisplay = () => {
    setOpenUserStatus(!openUserStatus);
  };
  return (
    <div className={classes.user}>
      <div className={classes.user__btn} onClick={handleUserDisplay}>
        <UserAvatar />
      </div>

      {/* User dropdown */}
      {openUserStatus ? (
        <>
          <div className={classes.dropdown}>
            <div className={classes.dropdown__wrapper}>
              <div className={classes.dropdown__info}>
                <UserAvatar />
              </div>

              {/* Links */}
              <Link to='/profile'>
                Edit Profile
                <span>
                  <FaChevronRight />
                </span>
              </Link>
              <Link to='/history'>
                History
                <span>
                  <FaChevronRight />
                </span>
              </Link>
              <Link to='/settings'>
                Settngs and Privacy
                <span>
                  <FaChevronRight />
                </span>
              </Link>
              <button type='button' className={classes.signout__btn}>
                Log out
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
