
const express = require("express")
const router = express.Router()
const validarCompra = require("../middlewares/validarCompra")

let compras = [
    { id: 1, cliente: "Ana", produto: "Arroz", valor: 28, status: "entregue" },
    { id: 2, cliente: "Bruno", produto: "Leite", valor: 6, status: "fechada" },
    { id: 3, cliente: "Carla", produto: "Cafe", valor: 18, status: "fechada" }
]

router.get("/", (req, res) => {
    const { status, valorMin } = req.query

    let resultado = compras

    if (status) {
        resultado = resultado.filter(compra => compra.status === status)
    }

    if (valorMin !== undefined) {
        resultado = resultado.filter(
            compra => compra.valor >= Number(valorMin)
        )
    }

    res.status(200).json(resultado)
})

router.get("/resumo", (req, res) => {
    const total = compras.length

    const valorTotal = compras.reduce(
        (soma, compra) => soma + compra.valor,
        0
    )

    res.status(200).json({
        total,
        valorTotal
    })
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const compra = compras.find(compra => compra.id === id)

    if (!compra) {
        const erro = new Error("Compra nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(compra)
})


router.post("/", validarCompra, (req, res) => {
    const { cliente, produto, valor } = req.body

    const novoId = Math.max(...compras.map(compra => compra.id)) + 1

    const novaCompra = {
        id: novoId,
        cliente,
        produto,
        valor,
        status: "aberta"
    }

    compras.push(novaCompra)

    res.status(201).json({
        mensagem: "Registro de compra criado"
    })
})

module.exports = router
