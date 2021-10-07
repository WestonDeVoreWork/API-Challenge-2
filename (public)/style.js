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
    url = baseURL + "pair/" + baseCurrencyValue + '/' + targetCurrencyValue; // replace USD to ${baseCurrencyValue}


    fetch(url)
        //     , 
        //     {
        //     mode: "no-cors"
        // })
        .then(res => res.json())
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
    console.log(data);
    const searchTermData = (data);
    console.log(searchTermData);
    targetCurrencyValue = targetCurrency.value;
    console.log(targetCurrencyValue)
    const converstionRate = (searchTermData.conversion_rates.targetCurrencyValue); //const converstionRate = (searchTermData.conversion_rates.USD);
    console.log(converstionRate);
    const jsonConverstionRate = JSON.stringify(converstionRate);
    document.getElementById("resultDisplay").innerHTML = `${jsonConverstionRate}`;
}