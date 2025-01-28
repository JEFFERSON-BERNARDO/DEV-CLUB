const cart = [10, 244, 99, 2, 20, 33, 250]

let FinalValueWithDiscount = 0
let FinalValue = 0
function CalculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result

}
cart.forEach(value => {
    FinalValue += value
    return FinalValue


})



cart.forEach((value) => {

    if (value > 30) {
        let discount = CalculateDiscount(value, 10)
        FinalValueWithDiscount = FinalValueWithDiscount + (value - discount)
        return discount
    }


    else {
        FinalValueWithDiscount += value
    }
});

const discount = FinalValue - FinalValueWithDiscount

console.log(`O total da sua compra é R$ ${FinalValue.toFixed(2)} Reais, 
Mais vocé obteve um desconto de R$${discount.toFixed(2)} Reais    
Portanto o preço final da sua compra é R$ ${FinalValueWithDiscount.toFixed(2)} Reais`)

