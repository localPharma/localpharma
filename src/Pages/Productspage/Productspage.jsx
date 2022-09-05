/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import classes from "./Productspage.module.css";
import Header from "../../Components/Core/Header/Header";
import Footer from "../../Components/Core/Footer/Footer";
// import { drugs } from "../../api/products";
import ProductCard from "../../Components/Widgets/ProductCard";
import { FaSearch } from "react-icons/fa";

const Productspage = () => {
  const [searchDrug, setSearchDrug] = useState("");
  const [filteredDrugs, setFilteredDrugs] = useState([]);
  // const [activeTab, setActiveTab] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const filterByTab = (type) => {
  //   if (type) {
  //     setActiveTab(true);
  //     alert(type);
  //   }
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch('http://localhost:4000/products')
      const resData = await products.json()

      setFilteredDrugs(resData)
      // console.table(resData);
    }

    fetchProducts()

  }, [])

  return (
    <>
      <Header />
      <div className={classes.products__page}>
        {/* Products Search */}
        <div className={classes.search}>
          <div className={classes.search__wrapper}>
            <form>
              <input
                type="search"
                name="searchbox"
                placeholder="Search for your drugs "
                required
                value={searchDrug}
                onChange={(e) => setSearchDrug(e.target.value)}
              />
              <button type="submit" className={classes.searchBtn}>
                <FaSearch className={classes.searchIcon} />
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={classes.filterTabs}>
          <button
            // onClick={() => filterByTab("all")}
            type="button"
            className={classes.filterTabsBtn}
          >
            All
          </button>
          <button
            // onClick={() => filterByTab("headache")}
            type="button"
            className={classes.filterTabsBtn}
          >
            Headache
          </button>
          <button
            // onClick={() => filterByTab("test")}
            type="button"
            className={classes.filterTabsBtn}
          >
            Tests
          </button>
          <button
            // onClick={() => filterByTab("first aid")}
            type="button"
            className={classes.filterTabsBtn}
          >
            First Aids
          </button>
          {/* <button
            onClick={() => filterByTab("")}
            type="button"
            className={classes.filterTabsBtn}
          >
            
          </button> */}
        </div>
        {/* Search Products */}
        <div className={classes.products}>
          {filteredDrugs.map((product, index) => (
            // ...drug product card
            <ProductCard
              key={index}
              id={index}
              product={product}
              // prodId={id}
              // prodName={drug_name}
              // prodBrand={drug_brand}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productspage;
