import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";

const Pharmacypage = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      Pharmacy page {JSON.stringify(params)}
    </div>
  );
};

export default Pharmacypage;
