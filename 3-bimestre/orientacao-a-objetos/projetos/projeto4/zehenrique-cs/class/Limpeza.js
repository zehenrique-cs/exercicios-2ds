const ChamadoCondominio = require("./ChamadoCondominio")

class Limpeza extends ChamadoCondominio {

    resumo(){
        return "Chamado de limpeza aberto"
    }

}

module.exports = Limpeza