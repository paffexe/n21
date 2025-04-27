const db = require("../config/db");
const { queryGenerate } = require("../helpers/query.generate");

const createReview = (req, res) => {
  const { stadion_id, user_id, rating, comment } = req.body;

  db.query(
    `INSERT INTO review (stadion_id, user_id, rating, comment) VALUES
    (?, ?, ?, ?)`,
    [stadion_id, user_id, rating, comment],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send({ message: `${err.message}` });
      }
      console.log(result);
      res.send({ message: `Ma'lumot qo'shildi` });
    }
  );
};

const getAllReviews = (req, res) => {
  db.query(`SELECT * FROM review`, (err, result) => {
    if (err) {
      console.log(err);
      return res.send({ message: `${err.message}` });
    }
    res.send(result);
  });
};

const getOneReview = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM review WHERE id=?`, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send({ message: `${err.message}` });
    }
    res.send(result);
  });
};

const updateReview = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updateValue = queryGenerate(data);
  const values = Object.values(data);

  db.query(
    `UPDATE review SET ${updateValue} WHERE id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send({ message: `${err.message}` });
      }
      res.send({ message: "Updated successfully" });
    }
  );
};

const delReview = (req, res) => {
  const { id } = req.params.id;

  db.query(`DELETE FROM review WHERE id=?`, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send({ message: `${err.message}` });
    }
    res.send({ message: "Deleted successfully" });
  });
};

module.exports = {
  createReview,
  getAllReviews,
  getOneReview,
  updateReview,
  delReview,
};
