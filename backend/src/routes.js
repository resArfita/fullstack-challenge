const express = require("express");
const { getTrips, detailTrip, addTrip, editTrip, deleteTrip   } = require("./controller/trip");

const router = express.Router();

router.get("/trips", getTrips);
// lanjutkan untuk detail, add, dan delete
router.get("/trips/:id", detailTrip);
router.post("/trips", addTrip);
router.put("/trips/:id", editTrip);
router.delete("/trips/:id", deleteTrip);

module.exports = router;
