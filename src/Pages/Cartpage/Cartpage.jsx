import React from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Core/Footer/Footer";
import Header from "../../Components/Core/Header/Header";
import CartItem from "../../Components/Widgets/CartItem";
import { useCart } from "../../ContextAPI/CartContext";
import classes from "./Cartpage.module.css";

const Cartpage = () => {
  const history = useHistory();
  const items = useCart();
  // const totalPrice = 0

  const goBack = () => {
    history.goBack();
  };

  // Function to get all items from the Cart and display them...

  // const handleRemove = () => {};

  return (
    <>
      <Header />
      <div className={classes.cart__page}>
        <div className={classes.goBack}>
          <button type="button" className={classes.backIcon} onClick={goBack}>
            <FaArrowLeft /> Back
          </button>
        </div>

        <div className={classes.cart}>
          <div className={classes.cart__hd}>
            <h2>Your Cart</h2>
          </div>

          {/* Main Cart Lists */}
          <div className={classes.cart__wrapper}>
            <div className={classes.main__cart}>
              <div className={classes.cart__top}>
                <div className={classes.cart__left}>
                  <FaShoppingCart /> My cart
                </div>
                <div className={classes.confirm__cart}>
                  <button type="button">Confirm</button>
                </div>
              </div>
              {items.length === 0 ? (
                <>
                  <h2>Sorry, Cart is empty</h2>
                </>
              ) : (
                <>
                  <div className={classes.cart__lists}>
                    {/* Cart Lists */}
                    {items.map((item, index ) => (
                      <CartItem
                        index={index}
                        product={item}
                        key={index}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Cart Total */}
            <div className={classes.cart__total}>
              <h2>Cart Total</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cartpage;
