import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';

$(document).ready(function() {
  $(".subButton").click(function() {
    promise.then(function(response) {
      const body = JSON.parse(response.body);
      const input = $('#currency').val();
      const amount = $('#amount').val();
      let inputCurrency = '';
      let output = '';
      for (let i=0; i<body.length; i++) {
        if(input === `${body[i].currency_code}`) {
          inputCurrency = `${body[i].conversion_rates}`;
        }
      } 
      output = (amount * inputCurrency)
    })
  })
})