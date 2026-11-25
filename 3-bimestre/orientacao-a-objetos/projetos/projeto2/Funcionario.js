class Funcionario {
    static #quantidade = 0 

    #salario
    constructor(nome,cargo,salario) {
        this.nome = nome 
        this.cargo = cargo
        this.#salario = salario
        Funcionario.#quantidade++
     } 
    set salario (novoSalario){
        if (novoSalario >= 0 ){
            this.#salario = novoSalario
        }
    }
  static get quantidade(){
    return this.#quantidade
  }
  static get Funcionario(){
    return this.Funcionario
  }
  apresentar (){
    return `${this.nome} - ${this.cargo}` 
  }
}  

module.exports = Funcionario