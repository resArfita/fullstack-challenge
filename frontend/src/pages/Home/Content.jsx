// import trip from "../../data/trip";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Content = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/trips/");
        setTrips(response.data.data)
      } catch (error) {
        console.error("Error fetching trips", error);
      }
    };
    fetchTrips();
  }, [])

  return (
    <div className="bg-slate-400 grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 mx-10">
      {trips.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded m-auto px-2 py-2 mt-4 mb-4 cursor-pointer hover:scale-105"
          onClick={() => navigate(`/detail-trip/${item.id}`)}
        >
          <img src={item.image} alt="item image" className="w-shrink h-50" />
          <h1 className="text-xl mt-2">{item.title}</h1>
          <div className="my-1 flex justify-between">
            <p className="text-sm font-bold text-orange-500">Rp{item.price}</p>
            <p className="text-sm text-gray-500">{item.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
