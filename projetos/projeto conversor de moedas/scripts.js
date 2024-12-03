const convertButton = document.querySelector(".convert-button");
const currencySelect= document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue= document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".moeda-valor-para-converter")
    const currencyValueConverted = document.querySelector(".moeda-valor")

    


  const dolarToday  = 6.0;
  const euroToday   = 6.4;
  const libraToday  = 7.7;
  const bitcoinToday= 573096.1;
 

    if(currencySelect.value== "dolar"){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"}).format( inputCurrencyValue / dolarToday) 
    }

    if(currencySelect.value== "euro"){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"}).format( inputCurrencyValue / euroToday) 
    }

    if(currencySelect.value== "libra"){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"}).format( inputCurrencyValue / libraToday)
        
    }
    if(currencySelect.value== "bitcoin"){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"}).format( inputCurrencyValue / bitcoinToday)
        
    }
    
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"}).format(inputCurrencyValue)

  console.log(convertedValue);
}
function changeCurency() {
    const currencyName= document.getElementById("currency-name")
    const currecyImg = document.getElementById("currecy-img")
    
    if(currencySelect.value== "dolar"){
        currencyName.innerHTML= "Dólar Americano"
        currecyImg.src="./assets/usa.png"
    }

    if(currencySelect.value== "euro"){
        currencyName.innerHTML= "Euro União Européia"
        currecyImg.src="./assets/EURO.png"
    }

    if(currencySelect.value== "libra"){
        currencyName.innerHTML= "Libra Esterlina"
        currecyImg.src="./assets/libra.png"
    }

    if(currencySelect.value== "bitcoin"){
        currencyName.innerHTML= "Criptomoeda Bitcoin"
    }
  
convertValues()
}

currencySelect.addEventListener("change", changeCurency)
convertButton.addEventListener("click", convertValues);


