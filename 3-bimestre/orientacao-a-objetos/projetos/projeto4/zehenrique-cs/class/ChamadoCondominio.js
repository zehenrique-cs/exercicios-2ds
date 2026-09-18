class ChamadoCondominio {

    #nomeDoMorador
    #numeroDaUnidade

    constructor(nomeDoMorador, numeroDaUnidade) {
        this.#nomeDoMorador = nomeDoMorador
        this.#numeroDaUnidade = numeroDaUnidade
    }

    get nomeDoMorador() {
        return this.#nomeDoMorador
    }

    get numeroDaUnidade() {
        return this.#numeroDaUnidade
    }

    resumo() {
        return "Chamado registrado no sistema"
    }
}

module.exports = ChamadoCondominio