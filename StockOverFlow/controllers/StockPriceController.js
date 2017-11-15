var Client = require('node-rest-client').Client;
var client = new Client();
var keys = require('../index');

module.exports = function(app, route) {
    //Stock price 
    app.get('/stockprice/:func/:interval/:symbol', function(req, res) {
        client.get("https://www.alphavantage.co/query?function=" + req.params.func + "&symbol=" + req.params.symbol + "&interval=" + req.params.interval + "&apikey=" + keys.apiKey,
            function(data, response) {

                res.send(data);
            });
    });
    return function(req, res, next) { next(); };
}