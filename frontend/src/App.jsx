import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailTrip from "./pages/DetailTrip/DetailTrip";
import EditTrip from "./pages/EditTrip";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/detail-trip/:id" element={<DetailTrip />} />
        <Route path="/edit-trip/:id" element={<EditTrip/>} />
        {/* lanjutkan */}
      </Routes>
    </>
  );
};

export default App;
