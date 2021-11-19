import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';

$(document).ready(function() {
  let promise = CurrencyExchange.exchange();
  $(".subButton").click(function() {
    promise.then(function(response) {
      const body = JSON.parse(response);
      const input = $('#currency').val();
      const amount = $('#amount').val();
      let inputCurrency = '';
      for (let i=0; i<body.length; i++) {
        if(input === `${body[i].conversion_rates`) {
          inputCurrency = `${body[i].conversion_rates.}`;
        }
      } 
      let output = (amount * inputCurrency);
      $('#showExchange').show();
      return output;
    });
  });
});

let currencySelect = $('#currency').val();

$(document).ready(function() {
  let promise = CurrencyExchange.exchange();
  $('.subButton').click(function() {
    promise.then(function(response) {
      const body = JSON.parse(response);
      const input = $('#currency').val();
      const amount = $('#amount').val();

    })
  })
})

