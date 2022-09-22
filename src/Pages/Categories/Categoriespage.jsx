import { Link } from "react-router-dom";
import Banner from "../../Components/Core/Banner/Banner";
// import Banner from "../../Components/Core/Banner/Banner";
import Header from "../../Components/Core/Header/Header";
import classes from "./Categoriespage.module.css";
import CategoryImg from "../../assets/pharm1.jfif";
import Footer from "../../Components/Core/Footer/Footer";
import { useEffect } from "react";

const Categoriespage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner text="Our Categories" />
      <div>
        {/* Categoris Banner */}
        <div className={classes.categories__page}>
          <div className={classes.categories__hd}>
            <h2>Categories</h2>
          </div>
          {/* <div className={classes.categories__tabs}>
          <button type="button" className={`${classes.category__tabsBtn} ${classes.active}`}>
            All
          </button>
          <button type="button" className={classes.category__tabsBtn}>
            Buy Medicine
          </button>
          <button type="button" className={classes.category__tabsBtn}>
            Ask a Pharmacist
          </button>
          <button type="button" className={classes.category__tabsBtn}>
            First Aid Toolkits
          </button>
        </div> */}
        </div>

        {/* Category lists */}
        <section className={classes.category__list}>
          <Link to="/products">
            <div className={classes.category__img}>
              <img src={CategoryImg} alt="" />
            </div>
            <p>Buy Medicine</p>
          </Link>
          <Link to="/comingsoon">
            <div className={classes.category__img}>
              <img src={CategoryImg} alt="" />
            </div>
            <p>Ask a Pharmacist</p>
          </Link>
          <Link to="/comingsoon">
            <div className={classes.category__img}>
              <img src={CategoryImg} alt="" />
            </div>
            <p>Lab Tests</p>
          </Link>
          <Link to="/comingsoon">
            <div className={classes.category__img}>
              <img src={CategoryImg} alt="" />
            </div>
            <p>Upload Prescriptions</p>
          </Link>
          <Link to="/comingsoon">
            <div className={classes.category__img}>
              <img src={CategoryImg} alt="" />
            </div>
            <p>Dental and Oral Products</p>
          </Link>
          <Link to="/comingsoon">
            <div className={classes.category__img}>
              <img src={CategoryImg} alt="" />
            </div>
            <p>Mini Mart</p>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Categoriespage;
