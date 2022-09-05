import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (product, index, handleRemove) => {
  const { drug_name, drug_brand } = product;
  // console.log(product);
  return (
    <div className={classes.cart__item}>
      <h3>{drug_name}</h3>
      <p>{drug_brand}</p>
      <button type="button" onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
};

export default CartItem;
