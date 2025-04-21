const router = require("express").Router();

// routes
const teacherRoute = require("./teacher.routes");
const studentsRoute = require("./students.routes");
const groupsRoute = require("./groups.routes");
const aboutRoute = require("./about.routes");
const getComments = require("./comment.routes");

router.use(teacherRoute);
router.use(studentsRoute);
router.use(groupsRoute);
router.use(aboutRoute);
router.use(getComments);

module.exports = router;
