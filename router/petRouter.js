const {createPet, bulkpets, getAllPets, getOnePet, updatePet, deletePet} = require("../controller/petController")

const petRouter = require("express").Router()



petRouter.post("/createpet", createPet)

petRouter.post("/createbulk", bulkpets)

petRouter.get("/getallpet", getAllPets)

petRouter.get("/getonepet/:id", getOnePet)

petRouter.put("/updatepet/:id", updatePet)

petRouter.delete("/deletepet/:id", deletePet)



module.exports = petRouter