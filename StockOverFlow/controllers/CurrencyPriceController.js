var Client = require('node-rest-client').Client;
var client = new Client();

module.exports = function(app, route) {
    //Stock price 
    app.get('/currencyprice/:func/:symbol/:market', function(req, res) {
        client.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_" + req.params.func + "&symbol=" + req.params.symbol + "&market=" + req.params.market + "&apikey=80VEEF48E6H7Z2VC",
            function(data, response) {
                res.send(data);
            });
    });
    return function(req, res, next) { next(); };
}