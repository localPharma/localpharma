import React, { useEffect } from "react";
import classes from "./Productspage.module.css";
import Header from "../../Components/Core/Header/Header";
import Footer from "../../Components/Core/Footer/Footer";

const Productspage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={classes.products__page}></div>
      <Footer />
    </>
  );
};

export default Productspage;
