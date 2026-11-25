
const express = require("express")

const router = express.Router()

const cortesRouter = require("./cortes")
const clientesRouter = require("./clientes")
const promocoesRouter = require("./promocoes")


router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Barbearia"
    })
})


router.use("/cortes", cortesRouter)
router.use("/clientes", clientesRouter)
router.use("/promocoes", promocoesRouter)

module.exports = router
