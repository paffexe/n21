const {
  getTeachers,
  getTeacherById,
  getAddTeacher,
  postAddTeacher,
  deleteTeacherById,
  getEditTeacherById,
  putEditTeacherById,
} = require("../controllers/teacher.controller");

const router = require("express").Router();

router.get("/teachers", getTeachers);

// paramsdan malumot chiqarish
router.get("/teacher/:teacherId", getTeacherById);

router.get("/add-teacher", getAddTeacher);

// body dan malumot chiqarish
router.post("/add-teacher", postAddTeacher);

router.delete("/teacher/:id", deleteTeacherById);

router.get("/edit-teacher/:id", getEditTeacherById);

router.put("/edit_teacher/:id", putEditTeacherById);

module.exports = router;
