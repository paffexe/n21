const {
  createBooking,
  getAllBooking,
  getOneBooking,
  updateBooking,
  delBooking,
} = require("../controllers/booking.controller");

const router = require("express").Router();

router.post("/create", createBooking);
router.get("/all", getAllBooking);
router.get("/:id", getOneBooking);
router.patch("/:id", updateBooking);
router.delete("/:id", delBooking);

module.exports = router;
