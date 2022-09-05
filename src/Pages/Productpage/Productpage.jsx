import classes from "./Productpage.module.css";
import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../Components/Core/Footer/Footer";
import { useDispatchCart } from "../../ContextAPI/CartContext";

const Productpage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const dispatch = useDispatchCart();

  useEffect(() => {
    const fetchProduct = (id) => {
      try {
        fetch(`http://localhost:4000/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setSelectedProduct(data);
          });
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProduct(id);
  }, []);

  const handleAddToCart = (id) => {
    dispatch({ type: "ADD TO CART", id });
  };

  return (
    <>
      <Header />
      <div className={classes.product__page}>
        <h3>{selectedProduct.drug_name}</h3>
        <h3>{selectedProduct.drug_brand}</h3>
        <h3>{selectedProduct.drug_company}</h3>
        <button type="button" onClick={() => handleAddToCart(id)}>
          Add to cart
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Productpage;
