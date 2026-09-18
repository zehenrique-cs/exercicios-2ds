const ManutencaoPredial = require("./ManutencaoPredial")
const Seguranca = require("./Seguranca")
const Limpeza = require("./Limpeza")
const Ruido = require("./Ruido")


class ChamadoCondominioFactory {

    static criar(tipo, nomeDoMorador, numeroDaUnidade) {

        if (tipo === "manutencao") {
            return new ManutencaoPredial(nomeDoMorador, numeroDaUnidade)
        }

        if (tipo === "seguranca") {
            return new Seguranca(nomeDoMorador, numeroDaUnidade)
        }

        if (tipo === "limpeza") {
            return new Limpeza(nomeDoMorador, numeroDaUnidade)
        }

        if (tipo === "ruido") {
            return new Ruido(nomeDoMorador, numeroDaUnidade)
        }

        throw new Error("Tipo de chamado inválido")
    }

}


module.exports = ChamadoCondominioFactory