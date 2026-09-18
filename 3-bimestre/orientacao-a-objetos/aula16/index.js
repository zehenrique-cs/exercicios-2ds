class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    apresentar() {
        return `${this.marca} ${this.modelo}`
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo)
        this.portas = portas
    }

    abrirPortas() {
        return `O carro possui ${this.portas} portas`
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo)
        this.cilindrada = cilindrada
    }

    acelerar() {
        return `A moto ${this.marca} ${this.modelo} está acelerando`
    }
}

module.exports = {
    Veiculo,
    Carro,
    Moto
}