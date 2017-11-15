module.exports = {
    '/stocks': require('../controllers/StocksController'),
    '/stockprice/:func/:interval/:symbol': require('../controllers/StockPriceController'),
    '/cryptocurrency': require('../controllers/CryptoCurrenciesController'),
    '/currency': require('../controllers/PhysicalCurrenciesController'),
    '/exchange/:from/:to': require('../controllers/ExchangeController'),
    '/currencyprice/:func/:symbol/:market': require('../controllers/CurrencyPriceController'),
};