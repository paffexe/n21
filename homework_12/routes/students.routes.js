const { getStudents } = require("../controllers/students.controller");

const router = require("express").Router();

router.get("/students", getStudents);

module.exports = router;
