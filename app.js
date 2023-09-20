//Elementleri Seçme

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#fistCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
eventListeners();


function eventListeners (){
     amountElement.addEventListener("input",exchangeCurrency);
     firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
    };  
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
    };
};

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);

   currency.exchange()
}