/* eslint-disable no-unused-vars */
import React from "react";
// import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
import { useAuth } from "../../ContextAPI/AppContext";
import classes from "./Profile.module.css";
import Footer from "../../Components/Core/Footer/Footer";
import { Link } from "react-router-dom";

const Profilepage = () => {
  // const { id } = useParams();

  const { currentUser } = useAuth();

  console.log(currentUser);

  const { displayName, photoURL, email, emailVerified, phoneNumber, metadata } =
    currentUser;

  // const currentUser = id;
  return (
    <>
      <Header />

      {/* Main Profile Dashboard */}
      <div className={classes.profile__dashboard}>
        <div className={classes.banner__bg}></div>
        <div className={classes.profile_hd}>
          <div className={classes.user_profile_name}>
            <div className={classes.profile__img_container}>
              <img src={photoURL} alt={displayName} loading="lazy" />
            </div>
            <div className={classes.profile_name}>
              <h2>{displayName}</h2>
              <Link
                to={`/profile/${displayName}/order-history`}
                className={classes.order_history}
              >
                Order History
              </Link>
              {/* <p>Update your photo and personal details.</p> */}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className={classes.profile__details}>
          <div className={classes.profile__field}>
            <h3>Username:</h3>
            <p className={classes.username}>{displayName}</p>
          </div>
          <div className={classes.profile__field}>
            <h3>Email:</h3>
            <p>{email}</p>
          </div>
          <div className={classes.profile__field}>
            <h3>Phone number:</h3>
            <p>{phoneNumber ? phoneNumber : "Not available"}</p>
          </div>
          <div className={classes.profile__field}>
            <h3>Email verification:</h3>
            <p>{emailVerified ? "Verified" : "Not verified"}</p>
          </div>
          <div className={classes.profile__field}>
            <h3>Joined at:</h3>
            <p>{metadata.creationTime}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profilepage;
