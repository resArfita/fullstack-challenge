import { useNavigate } from "react-router-dom";
import Content from "./Content";
import Layout from "../../layout/Layout";
import { IoAddCircleOutline } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();

  const goToAddTrip = () => {
    navigate("/add-trip");
  }


  return (
    <Layout>
      <div className="mt-30 mb-30">
      <div className="flex justify-between mx-15">
        <h1 className="text-2xl font-bold">Income Trip</h1>
        <IoAddCircleOutline size={30}
        className="cursor-pointer"
        onClick={goToAddTrip} />
      </div>

      <Content />
    </div>
    </Layout>
    
  );
};

export default Home;
