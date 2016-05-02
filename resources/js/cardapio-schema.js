// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var cardapioSchema = new Schema({
    day: {
        type: Date,
        required: true,
        unique: true
    },
    principal: {
        type: String
    },
    salada: {
        type: String
    },
    healthy: {
        type: String
    },
    grill: {
        type: String
    },
    pasta: {
        type: String
    },
    sobremesa: {
        type: String
    },
    sopa: {
        type: String
    }
}, {
        timestamps: true
    });

// Create a model using it
var Cardapios = mongoose.model('Cardapio', cardapioSchema);

// Make this available to our Node applications
module.exports = Cardapios;