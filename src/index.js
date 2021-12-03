import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';


function getCurrency(body, amount, currencySelect) {
  let outputPrice = amount * body.conversion_rates[currencySelect];
  return outputPrice;
}

$("#form").submit(function(event) {
  event.preventDefault();
  let promise = CurrencyExchange.exchange();
  promise.then(function(response) {
    let body = JSON.parse(response);
    let amount = $('#amount').val();
    let currencySelect = $('#currency').val();
    let outputPrice = getCurrency(body, amount, currencySelect);
    showAnswer(outputPrice);
  });
});

function showAnswer(outputPrice) {
  $("#finalAmount").text(outputPrice);
}





