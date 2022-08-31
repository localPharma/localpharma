import { useEffect, useRef, useState } from "react";
import classes from "./Banner.module.css";

const Banner = ({text}) => {
  const [location, setLocation] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formRef = useRef();

  // Handle Search Location function
  const handleLocationSearch = e => {
    e.preventDefault();
    if (!location) {
      alert("Please choose a location");
    } else if (!pharmacy) {
      alert("Please choose a pharmacy");
    } else {
      setLocation(location);
      setPharmacy(pharmacy);
      // setIsFormSubmitted(true);
    }
  };

  useEffect(() => {
    const geolocationSuccess = function (position) {
      console.log(
        `Your location is ${position.coords.latitude} ${position.coords.longitude}`
      );
    };

    const geolocationFailure = error => {
      // console.error(`Error : ${error.code} => ${error.message}`);
      // alert('failed...')
      return;
    };

    // Function to track user's location
    if (navigator.geolocation) {
      // After user agrees to turn on location
      navigator.geolocation.getCurrentPosition(
        geolocationSuccess,
        geolocationFailure
      );
    } else {
      console.log("Geoloaction is not supported in this browser");
    }
  }, []);

  return (
    <div className={classes.banner}>
      <div className={classes.banner__txt}>
        <h2>{text}</h2>
      </div>
      {/* FORM */}
      <div className={classes.search__form}>
        <form onSubmit={handleLocationSearch} ref={formRef} autoComplete='off'>
          <span>
            <label htmlFor='location'>Location</label>
            <select
              className={classes.select}
              defaultValue='Choose a location'
              name='Search locations'
              id='location'
              required
              onChange={e => setLocation(e.target.value)}>
              <option value='Choose a location' disabled>
                Choose a location
              </option>
              <option value='Greater Accra'>Greater Accra</option>
              <option value='Central Region'>Central Region</option>
              <option value='Eastern Region'>Eastern Region</option>
              <option value='Ashanti Region'>Ashanti Region</option>
              <option value='Western Region'>Western Region</option>
              <option value='Volta Region'>Volta Region</option>
              <option value='Upper West Region'>Upper West Region</option>
              <option value='Upper East Region'>Upper East Region</option>
              <option value='Northen Region'>Northen Region</option>
              <option value='Brong Ahafo Region'>Brong Ahafo Region</option>
            </select>
          </span>
          <span>
            <label htmlFor='pharmacy'>Pharmacy</label>
            <input
              type='search'
              name='pharmacy'
              id='pharmacy'
              placeholder='Search'
              onChange={e => setPharmacy(e.target.value)}
              value={pharmacy}
            />
          </span>
          <div className={classes.search__btn}>
            <button type='submit'>Search</button>
          </div>
        </form>

        {/* {isFormSubmitted
          ? `You chose ${pharmacy} from this location ${location}`
          : ""} */}
      </div>
    </div>
  );
};

export default Banner;
