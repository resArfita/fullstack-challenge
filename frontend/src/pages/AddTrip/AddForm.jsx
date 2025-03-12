import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    country: "",
    accommodation: "",
    transportation: "",
    eat: "",
    durationDay: "",
    durationNight: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tripData = {
      title: formData.title,
      country: formData.country,
      accommodation: formData.accommodation,
      transportation: formData.transportation,
      eat: formData.eat,
      duration: {
        day: parseInt(formData.durationDay, 10),
        night: parseInt(formData.durationNight, 10),
      },
      dateTrip: formData.dateTrip,
      price: parseInt(formData.price, 10),
      quota: parseInt(formData.quota, 10),
      description: formData.description,
      image: formData.image,
    };

    try {
      await axios.post("http://localhost:3001/api/trips", tripData);
      alert("New Trip Added!");
      navigate("/")
      setFormData({
        title: "",
        country: "",
        accommodation: "",
        transportation: "",
        eat: "",
        durationDay: "",
        durationNight: "",
        dateTrip: "",
        price: "",
        quota: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding trip", error);
      alert("Failed to add trip. Try again.");
    }
  }

    return(
        <div className="mx-15 mt-5">
           
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">Title Trip</label>
          <input type="text" className="w-full p-2 border rounded-md"
           name="title" value={formData.title} onChange={handleChange} required  />
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <select className="w-full p-2 border rounded-md" name="country" value={formData.country} onChange={handleChange} required >
            <option value="">Choose</option>
            <option>Indonesia</option>
            <option>Japan</option>
            <option>Korea</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Accommodation</label>
          <input type="text" className="w-full p-2 border rounded-md" name="accommodation" value={formData.accommodation} onChange={handleChange} required />
        </div>

        <div>
          <label className="block font-medium">Transportation</label>
          <input type="text" className="w-full p-2 border rounded-md"  name="transportation" value={formData.transportation} onChange={handleChange} required  />
        </div>

        <div>
          <label className="block font-medium">Eat</label>
          <input type="text" className="w-full p-2 border rounded-md" name="eat" value={formData.eat} onChange={handleChange} required />
        </div>

        <div>
          <label className="block font-medium">Duration</label>
          <div className="flex items-center gap-4">
            <input type="number" className="w-30 p-2 border rounded-md"  name="durationDay" value={formData.durationDay} onChange={handleChange} required />
            <span>Day</span>
            <input type="number" className="w-30 p-2 border rounded-md" name="durationNight" value={formData.durationNight} onChange={handleChange} required />
            <span>Night</span>
          </div>
        </div>

        <div>
          <label className="block font-medium">Date Trip</label>
          <input type="date" className="w-full p-2 border rounded-md" name="dateTrip" value={formData.dateTrip} onChange={handleChange} required  />
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <input type="number" className="w-full p-2 border rounded-md"  name="price" value={formData.price} onChange={handleChange} required  />
        </div>

        <div>
          <label className="block font-medium">Quota</label>
          <input type="number" className="w-full p-2 border rounded-md" name="quota" value={formData.quota} onChange={handleChange} required  />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea className="w-full p-2 border rounded-md h-24" name="description" value={formData.description} onChange={handleChange} required  ></textarea>
        </div>

        <div>
          <label className="block font-medium">Image URL</label>
          <input type="text" className="w-full p-2 border rounded-md" name="image" value={formData.image} onChange={handleChange} required  />
        </div>

        <button type="submit" className="w-50 mx-auto block bg-my-yellow text-white py-2 rounded-md cursor-pointer hover:bg-yellow-600">
          Add Trip
        </button>
      </form>
        </div>
    )
}

export default AddForm;