const {
  createUser,
  getAllusers,
  getUserById,
  removeUserById,
  updateUsetById,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/create", createUser);
router.get("/all", getAllusers);
router.get("/:id", getUserById);
router.delete("/:id", removeUserById);
router.patch("/:id", updateUsetById)

module.exports = router;
