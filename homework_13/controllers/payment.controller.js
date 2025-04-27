const db = require("../config/db");
const { queryGenerate } = require("../helpers/query.generate");

const createPayment = (req, res) => {
  const { booking_id, amount, payment_time, payment_method } = req.body;

  db.query(
    `
        INSERT INTO payment (booking_id, amount, payment_time, payment_method)
        VALUES (?, ?, ?, ?)
        `,
    [booking_id, amount, payment_time, payment_method],
    (err, result) => {
      if (err) {
        return res.send({ message: `${err.message}` });
      }
      res.send({ message: "Ma'lumot kiritildi" });
    }
  );
};

const getAllPayment = (req, res) => {
  db.query(`SELECT * FROM payment`, (err, result) => {
    if (err) {
      return res.send({ message: `${err.message}` });
    }
    res.send(result);
  });
};

const getOnePayment = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM payment WHERE id=?`, [id], (err, result) => {
    if (err) {
      return res.send({ message: `${err.message}` });
    }
    res.send(result);
  });
};

const updatePayment = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updateValue = queryGenerate(data);
  const values = Object.values(data);

  db.query(
    `UPDATE payment SET ${updateValue} WHERE id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        return res.send({ message: `${err.message}` });
      }
      res.send({ message: "Updated succefully" });
    }
  );
};

const delPayment = (req, res) => {
    const {id} = req.params.id

    db.query(`DELETE FROM payment WHERE id=?`, [id], (err, result)=>{
        if(err){
            return res.send({message: `${err.message}`})
        }
        res.send({message: "Deleted successefully"})
    })
};

module.exports = {
  createPayment,
  getAllPayment,
  getOnePayment,
  updatePayment,
  delPayment,
};
