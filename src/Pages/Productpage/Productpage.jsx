import classes from "./Productpage.module.css";
import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
// import { Cart } from "../../api/db";

const Productpage = () => {
  // const [selectedProduct, setSelectedProduct] = useState('')

  const { id } = useParams();
  const productId = id;
  return (
    <>
    <Header />
      <div className={classes.product__page}>
        <h2>Hello product {productId}</h2>
      </div>
    </>
  );
};

export default Productpage;
