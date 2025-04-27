const router = require("express").Router();
const stadionRouter = require("./stadion.routes");
const usersRouter = require("./users.routes");
const bookingRouter = require("./booking.routes");
const imgRouter = require("./image.routes");
const paymentRouter = require("./payment.routes");
const reviewRouter = require("./reviews.routes");

router.use("/users", usersRouter);
router.use("/stadion", stadionRouter);
router.use("/booking", bookingRouter);
router.use("/images", imgRouter);
router.use("/payment", paymentRouter);
router.use("/review", reviewRouter);

module.exports = router;
