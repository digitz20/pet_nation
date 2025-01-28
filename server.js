const port = 2050

const express = require("express")

const cors = require("cors")
const petRouter = require("./router/petRouter")
const historyRouter = require("./router/adoptionHistoryRouter")


const app = express()

app.use(express.json())

app.use(cors())
app.use(petRouter)

app.use(historyRouter)

app.listen(port, () => {
    console.log(`my server is running on port ${port}`)
})

