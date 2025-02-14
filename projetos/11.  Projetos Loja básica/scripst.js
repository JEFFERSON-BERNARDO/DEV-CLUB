const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonDiscout = document.querySelector('.discount');
const buttonSumAll = document.querySelector('.sum-all');
const buttonVegano = document.querySelector('.vegano');


function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showAll(productsArray) {
    let myli = "";
    productsArray.forEach((product) => {
        myli += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="price">${formatCurrency(product.price)}</p>
        </li>
    `;
    });
    list.innerHTML = myli;
}

function discount() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: parseFloat((product.price * 0.9).toFixed(2)),
    }));
    showAll(newPrice);
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    const formattedTotal = formatCurrency(totalValue);
    const formattedDiscountedTotal = formatCurrency(totalValue * 0.9);

    list.innerHTML = `
        <li class="soma-itens">
            <img class="imgs" src='./assets/xsalada.jpeg'>
            <img class="imgs" src='./assets/xbacon.png'>
            <img class="imgs" src='./assets/bacon-egg.png'>
            <img class="imgs" src='./assets/monstruoso.png'>
            <img class="imgs" src='./assets/xvegan.png'>
            <img class="imgs" src='./assets/monstruoso-vegan.png'>    
            <p>A soma de todos os itens é :</p>
            <p class="price-All">${formattedTotal}</p>
            <p>Aplicando seu desconto o valor será de:</p>
            <p class="price-All">${formattedDiscountedTotal}</p>
        </li>
    `;

    console.log(totalValue);
}
function myFilter(){
const myVegans = menuOptions.filter(tipo => tipo.vegan)
    
    showAll(myVegans)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonDiscout.addEventListener('click', discount);
buttonSumAll.addEventListener('click', sumAllItens);
buttonVegano.addEventListener('click', myFilter)