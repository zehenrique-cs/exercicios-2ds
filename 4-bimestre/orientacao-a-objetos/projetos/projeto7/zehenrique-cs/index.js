
const express = require("express")
const app = express()

const comprasRouter = require("./routes/compras")


app.use(express.json())

app.use("/compras", comprasRouter)

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})


app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app
