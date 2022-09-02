import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";
import CardImg from "../../assets/images (1).png";
import { FaHeart } from "react-icons/fa";
import { FavouriteItems } from "../../api/db";
import { useDispatchCart } from "../../ContextAPI/CartContext";

const ProductCard = ({ prodId, prodName, prodImg, prodPrice, prodBrand }) => {
  const dispatch = useDispatchCart()

  // Function to add product to favourite cart
  const addToFav = (prodId) => {
    localStorage.setItem("Favourites", JSON.stringify(FavouriteItems));

    // Checking if the added product exists in the FavouriteItems db...
    // let savedProduct = 
    FavouriteItems.push({
      prodId,
      prodName,
      prodBrand,
      prodImg,
      prodPrice,
    });

    dispatch({type: "ADD TO FAV", prodId})

    // alert(`${prodId}: ${prodName} added to Favourites...`);
    console.log(FavouriteItems);
  };

  
  // const handleAddToCart = (item) => {
  //   dispatch({ type: "ADD TO CART", item})
  // }
  return (
    <div className={classes.product__card}>
      <div className={classes.product__img}>
        {prodImg ? (
          <img src={prodImg} alt={prodName} />
        ) : (
          <img src={CardImg} alt={prodName} />
        )}
      </div>
      <button
        type="button"
        className={classes.favBtn}
        onClick={() => addToFav(prodId)}
      >
        <FaHeart className={classes.favIcon} />
      </button>
      <Link to={`/product/${prodId}`} className={classes.product__details}>
        <h3>{prodName}</h3>
        <div>
          <p className={classes.prod__brand}>{prodBrand}</p>
          <p className={classes.prod__price}>
            <b>{prodPrice}</b>
          </p>
        </div>
        {/* <button type="button" onClick={() => handleAddToCart(prodId)}>Add to Basket</button> */}
      </Link>
    </div>
  );
};

export default ProductCard;
