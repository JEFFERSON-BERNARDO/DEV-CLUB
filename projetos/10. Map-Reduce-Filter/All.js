

const companias = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const lista = companias.map(value => ({
    ...value,
    marketValue: value.marketValue * 1.1
}));

console.log("A nova lista de companhias é:");
lista.forEach(company => {
    console.log(`* ${company.name} - Valor de mercado: $${company.marketValue} milhões`);
});


const novaLista = lista.filter(company => company.foundedOn < 1990)

console.log("\nEmpresas fundadas antes de 1990:");
novaLista.forEach(company => {
    console.log(`* ${company.name} - Fundada em: ${company.foundedOn}`);
});

const sum = novaLista.reduce((Acc, currentValue) => Acc + currentValue.marketValue, 0)



console.log(`\nO valor totaL das empresas é de:  $${sum}bilhões`)