const {createAdoptionHistory, bulkAdoptor, getallhistory, getOneAdoptor, updateaAdoptorHistory, deleteAdoptionName} = require("../controller/adoptionHistoryController")


const historyRouter = require("express").Router()

historyRouter.post("/createhistory/:id", createAdoptionHistory)

historyRouter.post("/createbulkadoptor", bulkAdoptor)

historyRouter.get("/alladoptorhistory", getallhistory)

historyRouter.get("/getoneadoptor/:id", getOneAdoptor)

historyRouter.put("/updateadoptor/:id", updateaAdoptorHistory)

historyRouter.delete("/deleteadoptor/:id", deleteAdoptionName)


module.exports = historyRouter

