const { getGroups } = require("../controllers/groups.controller")

const router = require("express").Router();

router.get("/groups", getGroups);

module.exports = router;
