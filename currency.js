class Currency{
    constructor(firstCurrency,secondCurrency){

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=52c4e988806429bc7f84282634508c95&format=1";
        this.amount = null;

    }
    exchange(){
        fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
    };
    changeAmount(amount){
        this.amount = amount;
    };
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changesecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}