export default class CurrencyExchange {
  static exchange() {
    return new Promise (function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/284e9256cbe9fa8a7a124601/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.reponse);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}