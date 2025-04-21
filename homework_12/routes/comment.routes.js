const {
  getComments,
  getCommentByid,
  getAddComment,
  postAddComment,
  deleteCommById,
  getEditCommById,
  putEditCommById,
} = require("../controllers/comment.controller");

const router = require("express").Router();

router.get("/comments", getComments);
router.get("/comment/:commentId", getCommentByid);

router.get("/add-comment", getAddComment);
router.post("/add-comment", postAddComment);

router.delete("/comment/:id", deleteCommById);

router.get("/edit-comment/:id", getEditCommById);
router.put("/edit-comment/:id", putEditCommById);

module.exports = router;
