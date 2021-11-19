import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';

$(document).ready(function() {
  let promise = CurrencyExchange.exchange();
  $(".subButton").click(function() {
    const input = $('#currency').val();
    const amount = $('#amount').val();
    promise.then(function(response) {
      const body = JSON.parse(response);
      let inputCurrency = '';
      for (let i=0; i<body.length; i++) {
        if(input === `${body[i].conversion_rates`) {
          inputCurrency = `${body[i].conversion_rates}`;
        }
      } 
      let output = (amount * inputCurrency);
      $('#showExchange').show();
      $('#finalAmount').text(output)
    });
  });
}); 



/*$(document).ready(function() {
  let promise = CurrencyExchange.exchange();
  $('.subButton').click(function() {
    promise.then(function(response) {
      const body = JSON.parse(response);
      const currencySelect = $('#currency').val();
      const amount = $('#amount').val();
      for(let i=0; i<body.length; i++) {
        if (currencySelect === `${body[i].conversion_rates.EUR}`) {
          let outputPrice = (amount * `${body[i].conversion_rates.EUR}`)
        } else if (currencySelect === `${body[i].conversion_rates.JPY}`) {
          let outputPrice = (amount * `${body[i].conversion_rates.JPY}`)
        } else if (currencySelect === `${body[i].conversion_rates.GBP}`) {
          let outputPrice = (amount * `${body[i].conversion_rates.GBP}`)
        } else if (currencySelect === `${body[i].conversion_rates.AUD}`) {
          let outputPrice = (amount * `${body[i].conversion_rates.AUD}`)
        } else if (currencySelect === `${body[i].conversion_rates.CAD}`) {
          let outputPrice = (amount * `${body[i].conversion_rates.CAD}`)
        }
        $('#showExchange').show();
        $('#finalAmount').text(outputPrice);
      }


    })
  })
}) */

