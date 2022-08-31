import React from "react";
import Banner from "../../Components/Core/Banner/Banner";
import Header from "../../Components/Core/Header/Header";
import MostPopular from "../../Components/MostPopularProducts/MostPopular";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner text="Choose Your Pharmacy"/>
      <MostPopular />
    </div>
  );
};

export default Homepage;
