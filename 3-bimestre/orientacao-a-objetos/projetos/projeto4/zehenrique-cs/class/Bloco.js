class Bloco {

    constructor(nome){
        this.nome = nome
        this.categorias = []
        this.membros = []
    }


    adicionarCategoria(fornecedor){
        this.categorias.push(fornecedor)
    }


    adicionarMembro(membro){
        this.membros.push(membro)
    }

}


module.exports = Bloco