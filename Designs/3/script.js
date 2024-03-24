const $price = document.querySelector('.price');
const $symbol = document.querySelector('.symbol');
let cache = {};

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((res) => {
    return res.json();
})
.then((json) => {
    cache = json.bpi;
    parseCurrency('USD');
});

function parseCurrency(currentprice){
    $symbol.innerHTML = cache[currency].$symbol;
    $price.innerHTML = cache[currency].rate.split('.')[0];
}

function selectCurrency($currency){
    document.querySelector('button.selected').classList.remove('selected');
    $currency.classList.add('selected');
    parseCurrency($currency.id)
}

document.querySelectorAll('button')
.forEach(($button) => {
    $button.addEventListener(
        'click',
        (event) => {
            selectCurrency(event.target);
        },
    );
});