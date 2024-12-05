const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectDe = document.querySelector(".currency-select-de");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".moeda-valor-para-converter")
    const currencyValueConverted = document.querySelector(".moeda-valor")


    const bitcoinToday = 573096.1;
    const dolarToday = 6.0;
    const euroToday = 6.4;
    const libraToday = 7.7;
    const realToday = 1.0 ;

    const realXdolar=realToday/dolarToday
    const realXbitcoin=realToday/bitcoinToday
    const realXeuro=realToday/euroToday
    const realXlibra=realToday/libraToday
    const realXreal=realToday

    const bitcoinXbitcon=bitcoinToday
    const bitcoinXdolar=bitcoinToday/dolarToday
    const bitcoinXeuro=bitcoinToday/euroToday
    const bitcoinXlibra=bitcoinToday/libraToday
    const bitcoinx=bitcoinToday/realToday

    const dolarXbitcoin=dolarToday/bitcoinToday
    const dolarXdolar=dolarToday/dolarToday
    const dolarXeuro=dolarToday/euroToday
    const dolarXlibra=dolarToday/libraToday
    const dolarXreal=dolarToday/realToday

    const euroXbitcoin=euroToday/bitcoinToday
    const euroXdolar=euroToday/dolarToday
    const euroXeuro=euroToday/euroToday
    const euroXreal=euroToday/realToday

    const libraXbitcoin=libraToday/bitcoinToday
    const libraXdolar=libraToday/dolarToday
    const libraXeuro=libraToday/euroToday
    const libraXlibra=libraToday/libraToday
    const libraXreal=libraToday/realToday


    if (currencySelectDe.value == "real-de" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * realXdolar)

        console.log ("ate aqui sim")
    }

    if (currencySelectDe.value == "real-de" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * realToday / euroToday)
    }

    if (currencySelectDe.value == "real-de" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * realToday / libraToday)

    }
    if (currencySelectDe.value == "real-de" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * realToday / bitcoinToday)


    if (currencySelectDe.value == "real-de" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday / realToday)

        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        console.log(convertedValue);
    }
    function changeCurency() {
        const currencyName = document.getElementById("currency-name")
        const currecyImg = document.getElementById("currecy-img")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar Americano"
            currecyImg.src = "./assets/usa.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro União Européia"
            currecyImg.src = "./assets/EURO.png"
        }

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra Esterlina"
            currecyImg.src = "./assets/libra.png"
        }

        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Criptomoeda Bitcoin"
        }
        
        if (currencySelect.value == "real") {
            currencyName.innerHTML = "Real Brasileiro"
        }

        convertValues()
    }
    currencySelectDe.addEventListener("change", changeCurency)
    currencySelect.addEventListener("change", changeCurency)
    convertButton.addEventListener("click", convertValues)
}
