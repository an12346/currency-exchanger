import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';

$(document).ready(function() {
  let promise = CurrencyExchange.exchange();
    $('.subButton').click(function() {
      promise.then(function(response) {
        const body = JSON.parse(response);
        const currencySelect = $('#currency').val();
        const amount = $('#amount').val();
        let outputPrice ='';
        for(let i=0; i<body.length; i++) {
          if (currencySelect === `${body[i].conversion_rates.EUR}`) {
           outputPrice = (amount * `${body[i].conversion_rates.EUR}`)
          } else if (currencySelect === `${body[i].conversion_rates.JPY}`) {
           outputPrice = (amount * `${body[i].conversion_rates.JPY}`)
          } else if (currencySelect === `${body[i].conversion_rates.GBP}`) {
            outputPrice = (amount * `${body[i].conversion_rates.GBP}`)
          } else if (currencySelect === `${body[i].conversion_rates.AUD}`) {
            outputPrice = (amount * `${body[i].conversion_rates.AUD}`)
          } else if (currencySelect === `${body[i].conversion_rates.CAD}`) {
             outputPrice = (amount * `${body[i].conversion_rates.CAD}`)
          } 
        };
        function(error) {
          $('#showErrors').text(`This currency does not exist: ${error}`);
          }
      });
    $('#showExchange').show();
    $('#finalAmount').text(outputPrice);
  });
});







