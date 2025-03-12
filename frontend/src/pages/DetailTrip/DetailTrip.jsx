import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import TripIcon from "./TripIcon";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailTrip = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTripDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/trips/${id}`
        );
        setTrip(response.data.data);
      } catch (error) {
        console.error("Error fetching detail", error);
      }
    };

    fetchTripDetail();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this trip ?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/api/trips/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting trip:", error);
      alert("Failed to delete trip.");
    }
  };

  if (!trip) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="mt-30 mb-30">
        <div className="grid grid-cols mx-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{trip.title}</h1>

            <IoArrowBackCircleOutline
              size={30}
              className="cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <h3 className="text-gray-500">{trip.country}</h3>
          <img className="w-full" src={trip.image} alt={trip.title} />

          <TripIcon
            accommodation={trip.accommodation}
            transportation={trip.transportation}
            food={trip.eat}
            duration={`${trip.duration.day} Days ${trip.duration.night} Nights`}
            date={new Date(trip.dateTrip).toLocaleDateString("en-GB")}
          />

          <div className="mt-5">
            <p className="font-bold text-sm">Description</p>
            <p className="text-gray-500 text-xs">{trip.description}</p>
          </div>

          <div className="flex gap-2 my-5">
            <p className="font-bold text-orange-500">Rp{trip.price}</p>
            <p>/ Person</p>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full mx-auto block bg-slate-500 text-white py-2 rounded-md cursor-pointer hover:bg-slate-600"
              onClick={() => navigate(`/edit-trip/${id}`)}
            >
              Edit
            </button>

            <button className="w-50 mx-auto block bg-red-500 text-white py-2 rounded-md cursor-pointer hover:bg-red-600"
            onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTrip;
