
const express = require("express")

const routerPrincipal = require("./routes")

const app = express()

app.use(express.json())

app.use("/api", routerPrincipal)

module.exports = app
