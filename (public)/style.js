let baseURL = "http://api.coinlayer.com/api/live?access_key=0c584ba0d58b23629adf0c1285b4b305";
let apiKey = "0c584ba0d58b23629adf0c1285b4b305";


const searchTerm = document.querySelector("#searchForm")
const button = document.getElementById("submit");

button.addEventListener('click', CallFetch);

async function CallFetch(e) {

     console.log(searchTerm.value);
    const response =  await fetch(baseURL);
        const json =  await response;
                
        console.log(json);
        callSearch(json);
};

let callSearch = data => {
    const searchTermData = (data.searchTerm);
    console.log(searchTermData);
    document.getElementById("EtheriumDisplay").innerHTML = searchTermData;
};

function displayResults() {
    
}