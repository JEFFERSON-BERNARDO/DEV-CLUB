 const convertButton = document.querySelector(".convent-button")

 function conventValues(){
 const inputCurrencyValue = document.querySelector(".input-currecy").value

 const dolarToday = 6

 const convertedValue = inputCurrencyValue/ dolarToday

 console.log(convertedValue)

 }
 
 convertButton.addEventListener("click", conventValues)
