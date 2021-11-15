{
    const calculateResult = (plnElement, currencyElement) => {
        const eur = 4.61;
        const usd = 3.97;

        switch (currencyElement) {
            case "eur":
                return plnElement / eur;

            case "usd":
                return plnElement / usd;
        }
    };

   const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        const plnElement = plnElement.value;
        const currencyElement = currencyElement.value;

        const result = calculateResult(plnElement, currencyElement);

        resultElement.innerText = result.toFixed(2);
    });
   };

   init ();
}