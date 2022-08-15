import classes from "./PharmacyLits.module.css";
import { Link } from "react-router-dom";
import { pharmacies } from "../../api/pharmacies";
import { useEffect } from "react";

const PharmacyLists = () => {
  useEffect(() => {
    console.log(pharmacies);
  }, []);
  return (
    <div className={classes.pharmacy__lists}>
      <div className={classes.heading}>
        <h2>Vendors</h2>
      </div>
      <div className={classes.pharmacies}>
        {pharmacies
          .map(({ id, name, location, working_days, imgUrl }) => {
            return (
              <PharmacyCard
                key={id}
                image={imgUrl}
                title={name}
                location={location}
                working_days={working_days}
              />
            );
          })
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default PharmacyLists;

const PharmacyCard = ({ id, image, title, working_days, location }) => {
  return (
    <div className={classes.pharmacy__card}>
      <Link href='/pharmacy'>
        <img
          src={image}
          alt=''
          loading='lazy'
          width='100%'
          height='150px'
          className={classes.image}
        />
        <h3>{title}</h3>
        <p className={classes.working_days}>{working_days}</p>
        <p>{location}</p>
      </Link>
    </div>
  );
};
