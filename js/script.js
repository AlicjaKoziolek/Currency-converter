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

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln").value;
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency").value;

        const result = calculateResult(plnElement, currencyElement);

        resultElement.innerText = result.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit)
    };

    init();
}