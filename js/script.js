let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");


let eur = 4.61;
let usd = 3.97;
let result 


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currencyElement.value) {
        case "eur":
    result = plnElement.value / eur;
            break;
    
        case "usd":
    result= plnElement.value / usd;
    break;
    }
    
    resultElement.innerText= result.toFixed(2);
});

