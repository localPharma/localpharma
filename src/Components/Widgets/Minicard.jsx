import classes from "./Minicard.module.css";
import { Link } from "react-router-dom";

const Minicard = ({ title, txt }) => {
  return (
    <div className={classes.small__card_link}>
      <Link to='/'>
        <h3>{title}</h3>
        <p>{txt}</p>
      </Link>
    </div>
  );
};

export default Minicard;
