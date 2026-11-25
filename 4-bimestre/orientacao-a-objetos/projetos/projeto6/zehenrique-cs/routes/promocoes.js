
const express = require("express")

const router = express.Router()

const promocoes = [
    {
        id: 1,
        nome: "Social",
        desconto: 10
    },
    {
        id: 2,
        nome: "Degrade",
        desconto: 20
    }
]


router.get("/", (req, res) => {
    res.status(200).json(promocoes)
})


router.get("/total", (req, res) => {
    res.status(200).json({
        total: promocoes.length
    })
})

module.exports = router
