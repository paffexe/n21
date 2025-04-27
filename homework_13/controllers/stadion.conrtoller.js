const db = require("../config/db");
const { queryGenerate } = require("../helpers/query.generate");

const createStadion = (req, res) => {
  const { name, address, location, description, price, owner_id } = req.body;
  db.query(
    `
    INSERT INTO stadium (name, address, location, description, price, owner_id)
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [name, address, location, description, price, owner_id],
    (err, result) => {
      if (err) {
        console.log(`Error adding new stadium:`, err);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      console.log(result);
      res.status(201).send({ message: "Yangi stadion qo'shildi", result });
    }
  );
};

const getStadionAll = (req, res) => {
  db.query(`SELECT * FROM stadium`, (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.send(result);
  });
};

const getOneStadionById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM stadium WHERE id = ${id}`, (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.send(result);
  });
};

const updateStadionById = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);

  db.query(
    `UPDATE stadium SET ${updateValue} WHERE id=?`,
    [...values, id],
    (err, result)=> {
      if(err){
        res.status(500).send({message: `${err.message}`})
      }
      res.status(200).send({message: "Updated successfully"})
    }
  );
};

const removeStadionById = (req, res) => {
  let { id } = req.params.id;

  db.query(`DELETE FROM stadium WHERE id=?`, [id], (err, result)=>{
    if(err){
      res.status(500).send({message: `${err.message}`})
    }
    res.status(200).send({message: "Stadium deleted successfully"})
  })


};

module.exports = {
  getStadionAll,
  getOneStadionById,
  createStadion,
  updateStadionById,
  removeStadionById,
};
