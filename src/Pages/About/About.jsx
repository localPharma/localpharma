import React from "react";
import classes from "./About.module.css";
import Header from "../../Components/Core/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className={classes.about}>
        <h2>About Page</h2>
      </div>
    </>
  );
};

export default About;
