let apiKey = "6e8fafc70aed6fa377e61b09";


const baseCurrency = document.querySelector("#baseCurrency");
const targetCurrency = document.querySelector("#targetCurrency");

let baseURL = `https://v6.exchangerate-api.com/v6/${apiKey}/`;



const searchTerm = document.querySelector("#baseCurrency")
const button = document.getElementById("submit");

button.addEventListener('click', fetchSearchResults);

function fetchSearchResults() {
    console.log(baseCurrency.value);
    console.log(targetCurrency.value)
    const baseCurrencyValue = baseCurrency.value;
    const targetCurrencyValue = targetCurrency.value;
    console.log(baseCurrencyValue);
    console.log(targetCurrencyValue);
    url = baseURL;
    

fetch('https://v6.exchangerate-api.com/v6/6e8fafc70aed6fa377e61b09/latest/USD', {
    mode: 'no-cors'
})
        .then(function(result) {
            console.log(result.json());
            return(result.json);
        }) .then(function(json) {
            console.log(json)
            displayResults(json)
            // console.log(json.[baseCurrencyValue])
        })
        
}

let callSearch = data => {

};

let displayResults = data => {
    const searchTermData = (data)
    document.getElementById("resultDisplay").innerHTML = `${searchTermData}`;
}