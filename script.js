const convertbutton = document.querySelector(".convert-button")
const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")


function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.29
    const euroToday = 5.76
    const dolarCanadenseToday = 3.87


    if (currencySelect2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect2.value == "CAD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("in-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue / dolarCanadenseToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect2.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1 (1).png"
    }

    if (currencySelect2.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euroimg.png"
    }

    if (currencySelect2.value == "CAD") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/download.jpg"
    }


    convertValues()

}



currencySelect2.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)