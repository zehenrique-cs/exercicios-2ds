const ChamadoCondominio = require("./ChamadoCondominio")

class ManutencaoPredial extends ChamadoCondominio {

    constructor(nomeDoMorador, numeroDaUnidade) {
        super(nomeDoMorador, numeroDaUnidade)
        this.registros = []
    }

    resumo() {
        return "Chamado de manutenção predial aberto"
    }


    adicionarRegistro(registro) {

        if(registro.valor < 0){
            throw new Error("Valor inválido")
        }

        this.registros.push(registro)
    }
}

module.exports = ManutencaoPredial