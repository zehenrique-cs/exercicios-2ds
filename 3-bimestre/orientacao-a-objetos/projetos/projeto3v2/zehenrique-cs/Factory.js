const CertificadoDigital = require("./CertificadoDigital")

const ECpf = CertificadoDigital.ECpf
const ECnpj = CertificadoDigital.ECnpj
const Nfe = CertificadoDigital.Nfe
const Assinatura = CertificadoDigital.Assinatura

class Factory {
    static criar(tipo, titular) {
        if (!titular) {
            throw new Error("Titular é obrigatório")
        }

        switch (tipo) {
            case "ecpf":
                return new ECpf(titular)

            case "ecnpj":
                return new ECnpj(titular)

            case "nfe":
                return new Nfe(titular)

            case "assinatura":
                return new Assinatura(titular)

            default:
                throw new Error("Tipo de certificado inválido")
        }
    }
}

module.exports = Factory