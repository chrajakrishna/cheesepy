var Client = require('node-rest-client').Client;
var client = new Client();

module.exports = function(app, route) {
    //Stock price 
    app.get('/exchange/:from/:to', function(req, res) {
        client.get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" + req.params.from + "&to_currency=" + req.params.to + "&apikey=80VEEF48E6H7Z2VC",
            function(data, response) {
                res.send(data);
            });
    });
    return function(req, res, next) { next(); };
}