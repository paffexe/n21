const { createImage, getStadionImg, updateImg, delImage } = require('../controllers/image.controller')

const router = require("express").Router();

router.post("/create", createImage)
router.get("/:id", getStadionImg)
router.patch("/:id", updateImg)
router.delete("/:id", delImage)

module.exports = router