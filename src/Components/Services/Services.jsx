import classes from "./Services.module.css";
import Minicard from "../Widgets/Minicard";

const Services = () => {
  return (
    <div className={classes.mini__card}>
      <div className={classes.title}>
        <h3>Are you looking for:</h3>
      </div>
      <div className={classes.mini__cards}>
        <Minicard title='Doctors' txt='Book an appointment' />
        <Minicard title='Consults' txt='Book an appointment' />
        <Minicard title='Pharmarcies' txt='Buy medicines ' />
        <Minicard title='Diagnosis' txt='Book an appointment' />
      </div>
    </div>
  );
};

export default Services;
