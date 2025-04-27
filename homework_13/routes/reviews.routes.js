const {
  createReview,
  getAllReviews,
  getOneReview,
  updateReview,
  delReview,
} = require("../controllers/reviews.controller");

const router = require("express").Router();

router.post("/create", createReview);
router.get("/all", getAllReviews);
router.get("/:id", getOneReview);
router.patch("/:id", updateReview);
router.delete("/:id", delReview);

module.exports = router