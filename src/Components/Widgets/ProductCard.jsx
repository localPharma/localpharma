import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";
import CardImg from "../../assets/images (1).png";
import { FaHeart } from "react-icons/fa";
import { FavouriteItems } from "../../api/db";
// import { useDispatchCart } from "../../ContextAPI/CartContext";

const ProductCard = (product) => {
  // const { id, drug_name, drug_brand, price, imgUrl } = product
  // const prodId = id
  // const prodName = drug_name
  // const prodBrand = drug_brand
  // const prodPrice = price
  // const prodImg = imgUrl

  console.log(product);
  
  // const dispatch = useDispatchCart()

  // Function to add product to favourite cart
  const addToFav = (product) => {
    localStorage.setItem("Favourites", JSON.stringify(FavouriteItems));

    // Checking if the added product exists in the FavouriteItems db...
    // let savedProduct = 
    FavouriteItems.push(product);
  };

  // Handle Add to Cart Functionality...
  // const handleAddToCart = (prodcct) => {
  //   dispatch({ type: "ADD TO CART", prodcct})
  //   console.log(product);
  // }
  return (
    <div className={classes.product__card}>
      <div className={classes.product__img}>
        {product.prodImg ? (
          <img src={product.prodImg} alt={product.prodName} />
        ) : (
          <img src={CardImg} alt={product.prodName} />
        )}
      </div>
      <button
        type="button"
        className={classes.favBtn}
        onClick={() => addToFav(product.prodId)}
      >
        <FaHeart className={classes.favIcon} />
      </button>
      <Link to={`/product/${product.prodId}`} className={classes.product__details}>
        <h3>{product.prodName}</h3>
        <div>
          <p className={classes.prod__brand}>{product.prodBrand}</p>
          <p className={classes.prod__price}>
            <b>{product.prodPrice}</b>
          </p>
        </div>
        {/* <button type="button" onClick={() => handleAddToCart(product)}>Add to Basket</button> */}
      </Link>
    </div>
  );
};

export default ProductCard;
