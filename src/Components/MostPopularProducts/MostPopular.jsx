import React from "react";
import classes from "./MostPopular.module.css";
import { drugs } from "../../api/products";
import { Link } from "react-router-dom";

const MostPopular = () => {
  return (
    <div className={classes.most__popular}>
      <div className={classes.title}>
        <h3>Most Popular Products</h3>
      </div>
      <div className={classes.popular__products_lists}>
        {drugs
          .map(({ id, drug_name, drug_brand, drug_company }) => (
            <Card
              key={id}
              drug={drug_name}
              brand={drug_brand}
              company={drug_company}
            />
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default MostPopular;

const Card = ({ drug, brand, company }) => {
  return (
    <div className={classes.drug__card}>
      <Link to=''>
        <div className={classes.card__details}>
          <h2>{drug}</h2>
          <h3>{brand}</h3>
          <p>{company}</p>
        </div>
      </Link>
    </div>
  );
};
