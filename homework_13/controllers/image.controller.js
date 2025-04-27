const db = require("../config/db");
const { queryGenerate } = require("../helpers/query.generate");

const createImage = (req, res) => {
  const { stadion_id, image_url } = req.body;

  db.query(
    `INSERT INTO images (stadion_id, image_url)
         VALUES (?, ?)
        `,
    [stadion_id, image_url],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: `${error.message}` });
      }
      console.log(result);
      res.send(result);
    }
  );
};

const getStadionImg = (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM images WHERE id=?`, [id], (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const delImage = (req, res) => {
  const { id } = req.params.id;

  db.query(`DELETE FROM images WHERE id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send({ message: "Deleted successfully" });
  });
};

const updateImg = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);

  db.query(
    `UPDATE images SET ${updateValue} WHERE id = ?`,
    [...values, id],
    (error, result) => {
      if (error) {
        return res.status(500).send({ message: `${error.message}` });
      }
      res.status(200).send({ message: "Updated successfully" });
    }
  );
};

module.exports = {
  createImage,
  getStadionImg,
  delImage,
  updateImg,
};
