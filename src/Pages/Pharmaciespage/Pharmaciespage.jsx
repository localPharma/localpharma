import React from "react";
import { Link } from "react-router-dom";
import { pharmacies } from "../../api/pharmacies";
import Banner from "../../Components/Core/Banner/Banner";
import Header from "../../Components/Core/Header/Header";
import { Card } from "../../Components/MostPopularProducts/MostPopular";
import classes from "../../Components/MostPopularProducts/MostPopular.module.css";
import styles from "./Pharmaciespage.module.css";

const Pharmaciespage = () => {
  return (
    <div>
      <Header />
      <Banner text="Our Pharmacy Vendors" />
      <div className={classes.most__popular}>
        <div className={classes.title}>
          <h3>Our Pharmacy Vendors</h3>
        </div>
        <div className={classes.popular__products_lists}>
          {pharmacies.map(({ id, name, location, working_days, imgUrl }) => (
            <Card
              key={id}
              id={id}
              pharmacy_name={name}
              location={location}
              working_days={working_days}
              imgUrl={imgUrl}
            />
          ))}
        </div>
        {/* Signup for a pharmacy */}
        <div className={styles.create__pharmacy}>
          <h2>Do you want to open an online pharmacy with LocalPharma?</h2>
          <p>Open a pharmacy by registering from the link below.</p>
          <Link to="/auth/open-pharmacy" className={styles.open__pharmacy}>
            Create pharmacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pharmaciespage;
