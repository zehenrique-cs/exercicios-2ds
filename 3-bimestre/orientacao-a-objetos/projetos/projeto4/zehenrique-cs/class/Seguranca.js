const ChamadoCondominio = require("./ChamadoCondominio")

class Seguranca extends ChamadoCondominio {

    resumo(){
        return "Chamado de segurança aberto"
    }

}

module.exports = Seguranca