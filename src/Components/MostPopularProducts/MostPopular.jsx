import React, { useEffect, useLayoutEffect, useState } from "react";
import classes from "./MostPopular.module.css";
import { Link } from "react-router-dom";
import CardImg from "../../assets/pharm1.jfif";
// import { pharmacies } from "../../api/pharmacies";

const MostPopular = ({ allowSlice }) => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("useEffect...");
  }, []);

  useLayoutEffect(() => {
    const fetchProducts = async () => {
      const pharmacies = await fetch(`http://localhost:4000/pharmacies`);
      const resData = await pharmacies.json();

      setPharmacies(resData);
    };

    fetchProducts();

    console.log("useLayoutEffect...");
  }, []);
  return (
    <div className={classes.most__popular}>
      <div className={classes.title}>
        <h3>Our Pharmacy Vendors</h3>
      </div>
      <div className={classes.popular__products_lists}>
        {allowSlice ? (
          <>
            {pharmacies
              ?.map(({ id, name, location, working_days, logo }) => (
                <Card
                  key={id}
                  id={id}
                  pharmacy_name={name}
                  location={location}
                  working_days={working_days}
                  imgUrl={logo}
                />
              ))
              .slice(0, 6)}
          </>
        ) : (
          <>
            {pharmacies?.map(({ id, name, location, working_days, imgUrl }) => (
              <Card
                key={id}
                id={id}
                pharmacy_name={name}
                location={location}
                working_days={working_days}
                imgUrl={imgUrl}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MostPopular;

export const Card = ({ id, pharmacy_name, location, working_days, imgUrl }) => {
  return (
    <Link to={`/pharmacypage/${id}`} className={classes.drug__card}>
      <div className={classes.card__img}>
        <img
          src={imgUrl && CardImg}
          alt={pharmacy_name}
          aria-label="pharmacy name"
        />
      </div>
      <div className={classes.card__details}>
        <h2>{pharmacy_name}</h2>
        <span>
          <h3>{working_days}</h3>
          <p>{location}</p>
        </span>
      </div>
    </Link>
  );
};
