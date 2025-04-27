const db = require('../config/db');

const { queryGenerate } = require("../helpers/query.generate")

const createBooking = (req, res)=> {
    const {stadion_id, user_id, booking_date, start_time, end_time, total_price, status} = req.body

    db.query(
      `
        INSERT INTO booking(stadion_id, user_id, booking_date, start_time, end_time, total_price, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
      [
        stadion_id,
        user_id,
        booking_date,
        start_time,
        end_time,
        total_price,
        status,
      ],
      (err, result)=>{
        if(err){
            return res.status(500).send({message: `${err.message}`})
        }
        console.log(result);
        res.status(200).send({message: `Ma'lumot qo'shildi`})
      }
    );
}

const getAllBooking = (req, res) => {
    db.query(`SELECT * FROM booking`, (err, result)=>{
        if(err){
            return res.status(500).send({message: `${err.message}`})
        }
        res.send(result)
    })
};

const getOneBooking = (req, res) => {
    let id = req.params.id
    db.query(`SELECT * FROM booking WHERE id=?`, [id], (err, result)=>{
        if(err){
            return res.status(500).send({message: `${err.message}`})
        }
        res.send(result)
    })
};

const updateBooking = (req, res) => {
    let { id } = req.params;
    let data = req.body;
    let updateValue = queryGenerate(data)
    let values = Object.values(data)

    db.query(`UPDATE booking SET ${updateValue} WHERE id=?`, [...values, id],
        (err, result)=>{
           if (err) {
             return res.status(500).send({ message: `${err.message}` });
           }
           res.send({message: "Updated successfully"});
        }
    )

};

const delBooking = (req, res) => {
    let {id} = req.params.id

    db.query(`DELETE FROM booking WHERE id=?`, [id], (err, result) => {
      if (err) {
        return res.status(500).send({ message: `${err.message}` });
      }
      res.send({ message: "Deleted successfully" });
    });

};



module.exports = {
    createBooking,
    getAllBooking,
    getOneBooking,
    updateBooking,
    delBooking
}

