import React, { useEffect } from "react";
import Banner from "../../Components/Core/Banner/Banner";
import Header from "../../Components/Core/Header/Header";
import CreatePharmacy from "../../Components/CreatePharmacy/CreatePharmacy";
import MostPopular from '../../Components/MostPopularProducts/MostPopular'

const Pharmaciespage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Banner text="Our Pharmacy Vendors" />
      <MostPopular allowSlice={false} />
      <CreatePharmacy />
    </div>
  );
};

export default Pharmaciespage;
