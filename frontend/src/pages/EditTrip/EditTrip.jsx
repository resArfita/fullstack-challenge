import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    country: "",
    accommodation: "",
    transportation: "",
    eat: "",
    duration: { day: 0, night: 0 },
    dateTrip: "",
    price: 0,
    quota: 0,
    description: "",
    image: ""
  });

  // Fetch existing trip data
  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/trips/${id}`);
        const tripData = response.data.data;
        setFormData({
          title: tripData.title,
          country: tripData.country,
          accommodation: tripData.accommodation,
          transportation: tripData.transportation,
          eat: tripData.eat,
          duration: {
            day: tripData.duration.day,
            night: tripData.duration.night
          },
          dateTrip: new Date(tripData.dateTrip).toISOString().split("T")[0], // Format date for input
          price: tripData.price,
          quota: tripData.quota,
          description: tripData.description,
          image: tripData.image
        });
      } catch (error) {
        console.error("Error fetching trip data:", error);
      }
    };

    fetchTrip();
  }, [id]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "day" || name === "night") {
      setFormData((prev) => ({
        ...prev,
        duration: { ...prev.duration, [name]: parseInt(value) || 0 }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/trips/${id}`, formData);
      alert("Trip updated successfully!");
      navigate(`/detail-trip/${id}`); // Redirect to trip details
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };

  return (
    <div className="mx-15 mt-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">Title Trip</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option>Choose</option>
            <option>Indonesia</option>
            <option>Japan</option>
            <option>Korea</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Accommodation</label>
          <input
            type="text"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Transportation</label>
          <input
            type="text"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Eat</label>
          <input
            type="text"
            name="eat"
            value={formData.eat}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Duration</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              name="day"
              value={formData.duration.day}
              onChange={handleChange}
              className="w-30 p-2 border rounded-md"
            />
            <span>Day</span>
            <input
              type="number"
              name="night"
              value={formData.duration.night}
              onChange={handleChange}
              className="w-30 p-2 border rounded-md"
            />
            <span>Night</span>
          </div>
        </div>

        <div>
          <label className="block font-medium">Date Trip</label>
          <input
            type="date"
            name="dateTrip"
            value={formData.dateTrip}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Quota</label>
          <input
            type="number"
            name="quota"
            value={formData.quota}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md h-24"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-50 mx-auto block bg-my-yellow text-white py-2 rounded-md cursor-pointer hover:bg-yellow-600"
        >
          Edit Trip
        </button>
      </form>
    </div>
  );
};

export default EditForm;
