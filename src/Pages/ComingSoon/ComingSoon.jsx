import React from "react";
import { Link } from "react-router-dom";
import classes from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={classes.coming_soon}>
      <h2>Sorry, Page Coming Soon</h2>
      <p>Come back later</p>
      <Link to="/" replace>
        Go Home
      </Link>
    </div>
  );
};

export default ComingSoon;
