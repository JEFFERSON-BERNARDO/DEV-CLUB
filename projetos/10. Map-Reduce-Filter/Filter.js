

const lista = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const novaLista = lista.filter(número => {
    if (número <= 20) return true
    else return false
}
    
)

console.log(novaLista)