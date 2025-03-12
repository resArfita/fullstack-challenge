import EditForm from "./EditTrip";
import Layout from "../../layout/Layout";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const EditTrip = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      
      <div className="mt-30 mb-30">
      <div className="flex justify-between mx-15">
        <h1 className="text-2xl font-bold">Edit Trip</h1>
        <IoArrowBackCircleOutline size={30}
        className="cursor-pointer"
        onClick={() => navigate(-1)} />
      </div>

      <EditForm />
    </div>
    </Layout>
  )
};

export default EditTrip;
