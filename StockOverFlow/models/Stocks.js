var mongoose = require('mongoose');
const StockSchema = new mongoose.Schema({

    Symbol: {
        type: String,
    },

    Name: {
        type: String
    },

    LastSale: {
        type: Number
    },

    Sector: {
        type: String
    },

    IPOyear: {
        type: Number
    },

    Sector: {
        type: String
    },

    Industry: {
        type: String
    }





});

module.exports = StockSchema;