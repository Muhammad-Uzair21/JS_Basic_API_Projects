const fromMenu = document.getElementById("from")
const ToMenu = document.getElementById("to")
let result = document.getElementById("result")
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

currencyCodes.forEach((currency)=>{
    const option = document.createElement("option")
    option.value = currency
    option.text = currency
    fromMenu.add(option)
})
currencyCodes.forEach((currency)=>{
    const option = document.createElement("option")
    option.value = currency
    option.text = currency
    ToMenu.add(option)
})

fromMenu.value = "USD"
ToMenu.value = "PKR"

const convertCurruncies = ()=>{
    const amount = document.querySelector("#amount").value
    const fromCurrency = fromMenu.value 
    const ToCurrency = ToMenu.value

    if(amount >= 0){
        fetch(api).then((resp) => resp.json()).then((data) => {
            let fromExchange = data.conversion_rates[fromCurrency]
            let toExchange = data.conversion_rates[ToCurrency]
            let convertedAmount = (amount / fromExchange)* toExchange
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${ToCurrency}`
        })
    }
    else{
        alert("Please enter valid amount")
    }
}

document.querySelector("#convert-btn").addEventListener('click', convertCurruncies)