const { getAbout } = require("../controllers/about.controller");

const router = require("express").Router();

router.get("/about", getAbout);

module.exports = router;
