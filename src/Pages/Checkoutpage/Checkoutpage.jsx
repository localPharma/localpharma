import React from "react";
import classes from "./Checkoutpage.module.css";
import Header from "../../Components/Core/Header/Header";

const Checkoutpage = () => {
  return (
    <>
      <Header />
      <div className={classes.checkoutpage}>
        <h2>Checkout page</h2>
      </div>
    </>
  );
};

export default Checkoutpage;
