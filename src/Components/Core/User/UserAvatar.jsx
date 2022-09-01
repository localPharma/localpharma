import React from "react";
import classes from "./UserAvatar.module.css";

const UserAvatar = ({ displayName, photoUrl }) => {
  // Function to generate initials from userName is there is any...
  //  const getInitials = displayName => {
  //    displayName
  //      .split(" ")
  //      .map(x => x.charAt(0))
  //      .join("")
  //      .substr(0, 2)
  //      .toUpperCase();
  //  };

  return (
    <div className={classes.user__avatar}>
      <div className={classes.user__photo}>
        {photoUrl ? (
          <img src={photoUrl} alt="user avatar" className={classes.avatar} />
        ) : (
          <div className={classes.initials}>
            {displayName
              ?.split(" ")
              ?.map((n) => n[0])
              ?.join(".")}
          </div>
        )}
        <p className={classes.display_name}>
          {displayName ? displayName : "Welcome User"}
        </p>
      </div>
      {/* <div className={classes.user__photo}>
        <>
          <img src={photoUrl} alt='' className={classes.avatar} />
          <div className={classes.initials}>
            {displayName
              ?.split(" ")
              .map(n => n[0])
              .join(".")}
          </div>
        </>
        {displayName}
      </div> */}
    </div>
  );
};

export default UserAvatar;

/* 


*/
