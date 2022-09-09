import React from "react";
import classes from "./UserAvatar.module.css";

const UserAvatar = ({ displayName, photoUrl, email }) => {
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
            {displayName ||
              email
                ?.split(" ")
                ?.map((n) => n[0])
                ?.join(".")}
          </div>
        )}
        <p className={classes.display_name}>
          {displayName || email ? displayName || email : "Welcome User"}
        </p>
      </div>
    </div>
  );
};

export default UserAvatar;
