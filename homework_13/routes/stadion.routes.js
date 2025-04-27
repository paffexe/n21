const { getStadionAll, getOneStadionById, createStadion, updateStadionById, removeStadionById } = require('../controllers/stadion.conrtoller')

const stadionRouter = require('express').Router()

stadionRouter.get("/all", getStadionAll)
stadionRouter.get("/:id", getOneStadionById);
stadionRouter.post("/create", createStadion);
stadionRouter.patch("/:id", updateStadionById);
stadionRouter.delete("/:id", removeStadionById);


module.exports = stadionRouter
