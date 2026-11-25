
const express = require("express")

const router = express.Router()

const cortes = [
    {
        id: 1,
        nome: "Social",
        estilo: "classico",
        preco: 35,
        ativo: true
    },
    {
        id: 2,
        nome: "Degrade",
        estilo: "moderno",
        preco: 45,
        ativo: true
    },
    {
        id: 3,
        nome: "Navalhado",
        estilo: "moderno",
        preco: 55,
        ativo: false
    }
]


router.get("/", (req, res) => {
    res.status(200).json(cortes)
})


router.get("/ativos", (req, res) => {
    const cortesAtivos = cortes.filter(
        corte => corte.ativo === true
    )

    res.status(200).json(cortesAtivos)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: cortes.length
    })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de corte realizado"
    })
})

module.exports = router
