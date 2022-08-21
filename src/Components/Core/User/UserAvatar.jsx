import React from "react";

import classes from "./UserAvatar.module.css";

const UserAvatar = ({ displayName, photoUrl }) => {
  return (
    <div className={classes.user__avatar}>
      {/* <div className={classes.user__photo}>
        {photoUrl ? (
          <img src={photoUrl} alt='' className={classes.avatar} />
        ) : (
          <div className={classes.initials}>
            {displayName
              ?.split(" ")
              .map(n => n[0])
              .join(".")}
          </div>
        )}
        {displayName}
      </div> */}
      <div className={classes.user__photo}>
        <>
          <img src={photoUrl} alt='' className={classes.avatar} />
          <div className={classes.initials}>
            {displayName
              ?.split(" ")
              .map(n => n[0])
              .join(".")}
          </div>
        </>
        Erasmus Mensah
        {displayName}
      </div>
    </div>
  );
};

export default UserAvatar;

/* 


*/
