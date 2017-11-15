var mongoose = require('mongoose');
const PhysicalcurrencySchema = new mongoose.Schema({

    code: {
        type: String,
    },

    name: {
        type: String
    }
});

module.exports = PhysicalcurrencySchema;