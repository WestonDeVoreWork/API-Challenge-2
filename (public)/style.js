let apiKey = "6e8fafc70aed6fa377e61b09";

const baseCurrency = document.querySelector("#baseCurrency");
const targetCurrency = document.querySelector("#targetCurrency");

let baseURL = `https://v6.exchangerate-api.com/v6/${apiKey}/`;



const searchTerm = document.querySelector("#baseCurrency")
const button = document.getElementById("submit");

button.addEventListener('click', fetchSearchResults);

function fetchSearchResults() {
    const baseCurrencyValue = baseCurrency.value;
    const targetCurrencyValue = targetCurrency.value;
    console.log(baseCurrencyValue);
    console.log(targetCurrencyValue);
    url = baseURL + "latest/USD"; // replace USD to ${baseCurrencyValue}
    

fetch(url)
        .then(res => res.json)
        .then(data => displayResults(data))
        .catch(err => console.log(err))
            // console.log(json.[baseCurrencyValue])
}


/*
async function fetchFetchData() {
    const response = await fetch(url)
    console.log(response);
    const json = await response.json();
    displayResults(json);
    console.log(json);
}
}*/


let callSearch = data => {

};

let displayResults = data => {
    const searchTermData = (data)
    console.log(searchTermData)
    const searchTermDataString = JSON.toString(searchTermData)
    // console.log(JSON.stringify(searchTermData))
    console.log(searchTermDataString)
    document.getElementById("resultDisplay").innerHTML = `${searchTermData}`;
}