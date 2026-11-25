
const fs = require("fs/promises")


const ARQUIVO = process.env.ARQUIVO_PEDIDOS || "pedidos.json"


async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")

        return JSON.parse(conteudo)

    } catch (erro) {

     
        if (erro.code === "ENOENT") {
            return []
        }

        throw erro
    }
}


async function salvar(pedido) {


    const lista = await listar()


    lista.push(pedido)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )


    return pedido
}

async function atualizar(id, dados) {


    const lista = await listar()


    const indice = lista.findIndex(pedido => pedido.id === id)


    if (indice === -1) {
        return null
    }

    lista[indice] = {
        ...lista[indice],
        ...dados,
        id: lista[indice].id
    }


    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )


    return lista[indice]
}

async function remover(id) {


    const lista = await listar()

    const novaLista = lista.filter(pedido => pedido.id !== id)

    if (novaLista.length === lista.length) {
        return false
    }

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(novaLista, null, 2),
        "utf-8"
    )


    return true
}

async function contar() {

  
    const lista = await listar()

    return lista.length
}


module.exports = {
    listar,
    salvar,
    atualizar,
    remover,
    contar
}
