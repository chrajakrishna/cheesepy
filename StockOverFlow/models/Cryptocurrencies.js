var mongoose = require('mongoose');
const CryptocurrencySchema = new mongoose.Schema({

    code: {
        type: String,
    },

    name: {
        type: String
    }
});

module.exports = CryptocurrencySchema;