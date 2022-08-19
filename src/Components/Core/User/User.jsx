import React from "react";
import { FaUser } from "react-icons/fa";
import classes from "./User.module.css";
import { useAuth } from "../../../ContextAPI/AppContext";

const User = () => {
  const { currentUser } = useAuth();

  const user = currentUser;

  const { displayName, photoUrl } = user;

  // const getInitials = displayName => {
  //   displayName
  //     .split(" ")
  //     .map(x => x.charAt(0))
  //     .join("")
  //     .substr(0, 2)
  //     .toUpperCase();
  // };
  return (
    <div className={classes.user}>
      {photoUrl ? (
        <img src={photoUrl} alt={displayName} loading='lazy' />
      ) : (
        <>
          <FaUser />
          <p>{displayName}</p>
        </>
      )}
    </div>
  );
};

export default User;
