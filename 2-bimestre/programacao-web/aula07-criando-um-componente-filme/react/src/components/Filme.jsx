export default function Filme({ filme = "matrix", ano = 1999 }){
    return(
        <>
            <h1>Nome do filme: {filme}</h1>
            <p>Ano do Filme: {ano}</p>
        </>
    )
}