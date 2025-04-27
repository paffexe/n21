const { createPayment, getAllPayment, getOnePayment, updatePayment, delPayment } = require('../controllers/payment.controller')

const router = require('express').Router()

router.post("/create", createPayment)
router.get("/all", getAllPayment)
router.get("/:id", getOnePayment)
router.patch("/:id", updatePayment)
router.delete("/:id", delPayment)


module.exports = router