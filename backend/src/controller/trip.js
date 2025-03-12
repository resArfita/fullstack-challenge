// Data yang akan digunakan untuk edit, tambah, ataupun hapus
const TRIPS = [
  {
    id: 1,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    country: "Australia",
    accommodation: "Hotel",
    transportation: "Flight",
    eat: "Local restaurants",
    duration: {
      day: 6,
      night: 4,
    },
    dateTrip: "2025-06-10",
    price: 1500000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/sydney_p4d1w2.jpg",
  },
];

// GET ALL TRIPS
exports.getTrips = async (req, res) => {
  try {
    const data = TRIPS;
    res.status(200).send({
      status: "succeed",
      message: "Success get all trips",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

// GET TRIP BY ID
exports.detailTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = TRIPS.find((trip) => trip.id === parseInt(id));

    if (!trip) {
      return res.status(404).send({
        status: "not found",
        message: `Trip ${id} not found`,
      });
    }

    res.status(200).send({
      status: "succeed",
      message: "Success get trip by id / detail trip",
      data: trip,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

// ADD TRIP
exports.addTrip = async (req, res) => {
  try {
    const { title, country, accommodation, eat, transportation, duration, dateTrip, price, description, image } = req.body;

    if (!title || !country || !accommodation || !eat || !transportation || !duration || !dateTrip || !price || !description || !image) {
      return res.status(400).send({
        status: "failed",
        message: "All input required",
      });
    }

    const newTrip = {
      id: TRIPS.length + 1, 
      title,
      country,
      accommodation,
      transportation,
      eat,
      duration,
      dateTrip,
      price, // Added price field
      description,
      image,
    };

    TRIPS.push(newTrip);

    res.status(201).send({
      status: "succeed",
      message: "Success Add New Trip",
      data: newTrip,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

// EDIT TRIP
exports.editTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, country, accommodation, eat, transportation, duration, dateTrip, price, description, image } = req.body;
  
    const tripIndex = TRIPS.findIndex((trip) => trip.id === parseInt(id));

    if (tripIndex === -1) {
      return res.status(404).send({
        status: "not found",
        message: `Trip ${id} not found`,
      });
    }

    TRIPS[tripIndex] = {
      ...TRIPS[tripIndex],
      title: title || TRIPS[tripIndex].title,
      country: country || TRIPS[tripIndex].country,
      accommodation: accommodation || TRIPS[tripIndex].accommodation,
      transportation: transportation || TRIPS[tripIndex].transportation,
      eat: eat || TRIPS[tripIndex].eat,
      duration: duration || TRIPS[tripIndex].duration,
      dateTrip: dateTrip || TRIPS[tripIndex].dateTrip,
      price: price || TRIPS[tripIndex].price, // Added price update
      description: description || TRIPS[tripIndex].description,
      image: image || TRIPS[tripIndex].image,
    };

    res.status(200).send({
      status: "succeed",
      message: "Trip Updated!",
      data: TRIPS[tripIndex],
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

// DELETE TRIP
exports.deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const tripIndex = TRIPS.findIndex((trip) => trip.id === parseInt(id));

    if (tripIndex === -1) {
      return res.status(404).send({
        status: "not found",
        message: `Trip ${id} not found`,
      });
    }

    TRIPS.splice(tripIndex, 1);

    res.status(200).send({
      status: "succeed",
      message: `Trip ${id} deleted!`,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server error",
    });
  }
};
