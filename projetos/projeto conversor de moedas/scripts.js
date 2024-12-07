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
    const realToday = 1.0;

    const realXdolar = realToday / dolarToday
    const realXbitcoin = realToday / bitcoinToday
    const realXeuro = realToday / euroToday
    const realXlibra = realToday / libraToday
    const realXreal = realToday

    const bitcoinXbitcon = bitcoinToday
    const bitcoinXdolar = bitcoinToday / dolarToday
    const bitcoinXeuro = bitcoinToday / euroToday
    const bitcoinXlibra = bitcoinToday / libraToday
    const bitcoinx = bitcoinToday / realToday

    const dolarXbitcoin = dolarToday / bitcoinToday
    const dolarXdolar = dolarToday / dolarToday
    const dolarXeuro = dolarToday / euroToday
    const dolarXlibra = dolarToday / libraToday
    const dolarXreal = dolarToday / realToday

    const euroXbitcoin = euroToday / bitcoinToday
    const euroXdolar = euroToday / dolarToday
    const euroXeuro = euroToday / euroToday
    const euroXreal = euroToday / realToday

    const libraXbitcoin = libraToday / bitcoinToday
    const libraXdolar = libraToday / dolarToday
    const libraXeuro = libraToday / euroToday
    const libraXlibra = libraToday / libraToday
    const libraXreal = libraToday / realToday


    if (currencySelectDe.value == "real-de" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * realXdolar)
    }

    if (currencySelectDe.value == "real-de" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * realXeuro)
    }

    if (currencySelectDe.value == "real-de" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * realXlibra)

    }
    if (currencySelectDe.value == "real-de" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BIT"
        }).format(inputCurrencyValue * realXbitcoin)
    }

    if (currencySelectDe.value == "real-de" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realXreal)

    }
    
    if (currencySelectDe.value == "bitcoin-de" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * realXdolar)
    }

    if (currencySelectDe.value == "bitcoin-de" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * realXeuro)
    }

    if (currencySelectDe.value == "bitcoin-de" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * realXlibra)

    }

    if (currencySelectDe.value == "bitcoin-de" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BIT"
        }).format(inputCurrencyValue * realXbitcoin)
    }

    if (currencySelectDe.value == "bitcoin-de" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realXreal)

    }

    if (currencySelectDe.value == "dolar-de" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * realXdolar)
    }

    if (currencySelectDe.value == "dolar-de" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * realXeuro)
    }

    if (currencySelectDe.value == "dolar-de" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * realXlibra)

    }

    if (currencySelectDe.value == "dolar-de" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BIT"
        }).format(inputCurrencyValue * realXbitcoin)
    }

    if (currencySelectDe.value == "dolar-de" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realXreal)

    }

    if (currencySelectDe.value == "euro-de" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * realXdolar)
    }

    if (currencySelectDe.value == "euro-de" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * realXeuro)
    }

    if (currencySelectDe.value == "euro-de" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * realXlibra)

    }

    if (currencySelectDe.value == "euro-de" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BIT"
        }).format(inputCurrencyValue * realXbitcoin)
    }

    if (currencySelectDe.value == "euro-de" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realXreal)

    }

    if (currencySelectDe.value == "libra-de" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * realXdolar)
    }

    if (currencySelectDe.value == "libra-de" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * realXeuro)
    }

    if (currencySelectDe.value == "libra-de" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * realXlibra)

    }

    if (currencySelectDe.value == "libra-de" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BIT"
        }).format(inputCurrencyValue * realXbitcoin)
    }

    if (currencySelectDe.value == "libra-de" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realXreal)

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
        currencyName.innerHTML = "Bitcoin Criptomoeda"
        currecyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currecyImg.src = "./assets/brasil.png"
    }
    changeInputCurency()
    
    }
    function changeInputCurency() {
        const currencyNameInput = document.getElementById("currency-name-2")
        const currencyImgInput = document.getElementById("currency-img-2")
       
    if (currencySelectDe.value == "dolar-de") {
        currencyNameInput.innerHTML = "Dólar Americano"
        currencyImgInput.src = "./assets/usa.png"
    }

    if (currencySelectDe.value == "euro-de") {
        currencyNameInput.innerHTML = "Euro União Européia"
        currencyImgInput.src = "./assets/EURO.png"
    }

    if (currencySelectDe.value == "libra-de") {
        currencyNameInput.innerHTML = "Libra Esterlina"
        currencyImgInput.src = "./assets/libra.png"
    }

    if (currencySelectDe.value == "bitcoin-de") {
        currencyNameInput.innerHTML = "Bitcoin Criptomoeda"
        currencyImgInput.src = "./assets/bitcoin.png"
    }

    if (currencySelectDe.value == "real-de") {
        currencyNameInput.innerHTML = "Real Brasileiro"
        currencyImgInput.src = "./assets/brasil.png"
    }

    convertValues()
}
    
currencySelectDe.addEventListener("change", changeInputCurency)
currencySelect.addEventListener("change", changeCurency)
convertButton.addEventListener("click", convertValues)

