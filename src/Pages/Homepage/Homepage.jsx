import React, { useEffect } from "react";
import Banner from "../../Components/Core/Banner/Banner";
import Footer from "../../Components/Core/Footer/Footer";
import Header from "../../Components/Core/Header/Header";
import CreatePharmacy from "../../Components/CreatePharmacy/CreatePharmacy";
import MostPopular from "../../Components/MostPopularProducts/MostPopular";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Banner text="Choose Your Pharmacy" />
      <MostPopular allowSlice={true} />
      <CreatePharmacy />
      <Footer />
    </div>
  );
};

export default Homepage;
