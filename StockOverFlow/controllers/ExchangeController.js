var Client = require('node-rest-client').Client;
var client = new Client();
var keys = require('../index');

module.exports = function(app, route) {
    //Stock price 
    app.get('/exchange/:from/:to', function(req, res) {
        client.get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" + req.params.from + "&to_currency=" + req.params.to + "&apikey=" + keys.apiKey,
            function(data, response) {
                res.send(data);
            });
    });
    return function(req, res, next) { next(); };
}