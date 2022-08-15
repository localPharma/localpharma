import classes from "./Minicard.module.css";
import Link from "next/link";

const Minicard = ({ title, txt }) => {
  return (
    <div className={classes.small__card_link}>
      <Link href=''>
        <a>
          <h3>{title}</h3>
          <p>{txt}</p>
        </a>
      </Link>
    </div>
  );
};

export default Minicard;
