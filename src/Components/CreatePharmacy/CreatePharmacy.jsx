import React from "react";
import classes from "./CreatePharmacy.module.css";

const CreatePharmacy = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.create__pharmacy}>
        <h2>Do you want to open an online pharmacy with LocalPharma?</h2>
        <p>Open a pharmacy by registering from the link below.</p>
        <a
          href="https://local-pharma-dashboard.vercel.app"
          target="_parent"
          className={classes.open__pharmacy}
          rel="noreferrer"
        >
          Create pharmacy
        </a>
      </div>
    </div>
  );
};

export default CreatePharmacy;
