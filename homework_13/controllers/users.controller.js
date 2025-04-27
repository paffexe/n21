const db = require("../config/db");
const { queryGenerate } = require("../helpers/query.generate");
// params, body, query
const createUser = (req, res) => {
  const { first_name, last_name, email, password, phone, role } = req.body;
  db.query(
    `
    INSERT INTO users (first_name, last_name, email, password, phone, role)
    VALUES (?, ?, ?, ?, ?, ?)
     `,
    [first_name, last_name, email, password, phone, role],
    (error, result) => {
      if (error) {
        console.log(`Error adding new user`, error);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      console.log(result);
      res.status(201).send({ message: "Yangi user qo'shildi", result });
    }
  );
};

const getAllusers = (req, res) => {
  db.query(`SELECT * FROM users`, (error, result) => {
    if (error) {
      console.log(`Error get all users`, error);
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM users WHERE id = ${id}`, (error, result) => {
    if (error) {
      console.log(`Error - get all users`, error);
      return res.status(500).send({ message: "Serverda xatolik" });
    }
    res.send(result);
  });
};

const removeUserById = (req, res) => {
  let { id } = req.params.id;

  db.query(`DELETE FROM users WHERE id= ?`, [id], (error, result) => {
    if (error) {
      res.status(500).send({ message: `${error.message}` });
    }

    res.status(200).send({ message: "User deleted successfully" });
  });
};

const updateUsetById = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let updateValue = queryGenerate(data);
  let values = Object.values(data);

  db.query(
    `UPDATE users SET ${updateValue} WHERE id=?`,
    [...values, id],
    (error, result) => {
      if (error) {
        res.status(500).send({ message: `${error.message}` });
      }
      res.status(200).send({ message: "User updated successfully" });
    }
  );
};

module.exports = {
  createUser,
  getAllusers,
  getUserById,
  removeUserById,
  updateUsetById,
};
