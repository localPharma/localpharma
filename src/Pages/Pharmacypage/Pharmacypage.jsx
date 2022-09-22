import { useEffect, useLayoutEffect, useState } from "react";
import classes from "./Pharmacypage.module.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
import Footer from "../../Components/Core/Footer/Footer";

const Pharmacypage = () => {
  const params = useParams();
  const [pharmacy, setPharmacy] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("useEffect...");
  }, []);

  useLayoutEffect(() => {
    const fetchProducts = async () => {
      const pharmacies = await fetch(
        `http://localhost:4000/pharmacies/${params.id}`
      );
      const resData = await pharmacies.json();

      setPharmacy(resData);
    };

    fetchProducts();

    console.log("useLayoutEffect...");
  }, [params.id]);

  return (
    <>
      <Header />
      {/* Pharmacy page {JSON.stringify(params)} */}
      {/* <pre>{JSON.stringify(pharmacy)}</pre> */}

      <div className={classes.pharmacy__dashboard}>
        <div className={classes.banner__bg}></div>
        <div className={classes.pharmacy_hd}>
          <div className={classes.user_pharmacy_name}>
            <div className={classes.pharmacy__img_container}>
              <img src={pharmacy.logo} alt={pharmacy.name} loading="lazy" />
            </div>
            <div className={classes.pharmacy_name}>
              <h2>{pharmacy.name}</h2>
              <Link
                to={`/history/${pharmacy.name}`}
                className={classes.order_history}
              >
                View Products
              </Link>
              {/* <p>Update your photo and personal details.</p> */}
            </div>
          </div>
        </div>

        {/* pharmacy Details */}
        <div className={classes.pharmacy__details}>
          <div className={classes.pharmacy__field}>
            <h3>Username:</h3>
            <p className={classes.username}>{pharmacy.name}</p>
          </div>
          <div className={classes.pharmacy__field}>
            <h3>Email:</h3>
            {/* <p>{email}</p> */}
          </div>
          <div className={classes.pharmacy__field}>
            <h3>Phone number:</h3>
            {/* <p>{phoneNumber ? phoneNumber : "Not available"}</p> */}
          </div>
          <div className={classes.pharmacy__field}>
            <h3>Email verification:</h3>
            {/* <p>{emailVerified ? "Verified" : "Not verified"}</p> */}
          </div>
          <div className={classes.pharmacy__field}>
            <h3>Joined at:</h3>
            {/* <p>{metadata?.creationTime}</p> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pharmacypage;
