module.exports = {
    '/stocks': require('../controllers/StocksController'),
    '/stockprice/:func/:interval/:symbol': require('../controllers/StockPriceController'),
};