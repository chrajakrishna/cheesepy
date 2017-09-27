var mongoose = require('mongoose');
const StockSchema = new mongoose.Schema({

    Symbol: {
        type: String,
    },

    Name: {
        type: String
    }


});

module.exports = StockSchema;