class CertificadoDigital {
    constructor(titular) {
        if (!titular) {
            throw new Error("Titular é obrigatório")
        }

        this.titular = titular
    }

    emitir() {
        throw new Error("Método emitir() deve ser implementado")
    }
}

class ECpf extends CertificadoDigital {
    emitir() {
        return `Certificado digital e-CPF emitido para: ${this.titular}`
    }
}

class ECnpj extends CertificadoDigital {
    emitir() {
        return `Certificado digital e-CNPJ emitido para: ${this.titular}`
    }
}

class Nfe extends CertificadoDigital {
    emitir() {
        return `Certificado digital para NF-e emitido para: ${this.titular}`
    }
}

class Assinatura extends CertificadoDigital {
    emitir() {
        return `Certificado digital de assinatura emitido para: ${this.titular}`
    }
}

module.exports = CertificadoDigital

module.exports.ECpf = ECpf
module.exports.ECnpj = ECnpj
module.exports.Nfe = Nfe
module.exports.Assinatura = Assinatura