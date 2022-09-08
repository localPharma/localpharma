/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import classes from "./Productpage.module.css";
import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../Components/Core/Footer/Footer";
import { useDispatchCart } from "../../ContextAPI/CartContext";
import dummy from "../../assets/images (1).png";

const Productpage = () => {
  const [quantity, setQuantity] = useState(1);

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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    handleAddToCart(id)
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.product__page}>
        <div className={classes.main__product}>
          <div className={classes.product_img}>
            <img src={dummy} alt="" loading="lazy" />
          </div>
          <div className={classes.product__details}>
            <div className={classes.product__wrapper}>
              <div className={classes.product__info}>
                <div className={classes.product__hd}>
                  <h3 className={classes.product__name}>
                    {selectedProduct.drug_name}
                  </h3>
                  <p className={classes.product__brand}>
                    {selectedProduct.drug_brand}
                  </p>
                </div>
                <div className={classes.product__control}>
                  <div className={classes.product__qty}>
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      className={classes.product__qty_inc}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={increaseQuantity}>
                      +
                    </button>
                  </div>
                  <div className={classes.product__price}>
                    <h3>{selectedProduct.price}</h3>
                  </div>
                </div>
                <div className={classes.product__about}>
                  <h3>About product</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique, et id impedit tempora dolorum nisi. Ad saepe,
                    modi vitae facere vero ab?
                  </p>
                  <br />
                  <h3>Usage instructions</h3>
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sequi.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sequi.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sequi.
                    </li>
                  </ol>
                </div>
              </div>
              <div className={classes.product__actions}>
                <button type="button" className={classes.favBtn}>
                  Add to Favourites
                </button>
                <button
                  type="button"
                  onClick={() => handleAddToCart(id)}
                  className={classes.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productpage;
