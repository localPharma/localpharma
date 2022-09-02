import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer__brand}>
          <Link to="/">
            Local<span>Pharma.</span>
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            atque veritatis! Vel ut hic nemo.
          </p>
        </div>

        {/* Footer links */}
        <div className={classes.footer__links}>
          <div className={classes.links}>
            <h3>Links</h3>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
          </div>
          <div className={classes.misc}>
            <h3>Company</h3>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
            <Link to="/">About</Link>
          </div>
          <div className={classes.company}>
            <h3>Company</h3>
            <ul>
              <li>Location: Adenta, Housing Down</li>
              <li>Working days: Mon - Fri</li>
              <li>Tel: +233 5511 86991</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sub footer */}
      <div className={classes.copyright}>
        <p>All Rights Preserved @localPharma. </p>
      </div>
    </>
  );
};

export default Footer;
