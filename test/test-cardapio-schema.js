var mongoose = require('mongoose');
var assert = require('assert');

var Cardapios = require('../resources/js/cardapio-schema');

// Connection URL
var url = 'mongodb://localhost:27017/bandejao';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function openCallback () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new user
    var newCardapio = Cardapios({
        day: new Date(2016,04,01),
        principal: 'Principal Test',
        salada: 'salada test',
        healthy: 'healthy test',
        grill: 'Grill test',
        pasta: 'Pasta test',
        sobremesa: 'sobremesa test',
        sopa: 'sopa test'
    });
    
    // Validate schema
    const schemaError = newCardapio.validateSync();
    if (schemaError) {
        console.log("Validation Error :: " + schemaError);
    }

    // save the user
    newCardapio.save(function saveCallback (err) {
        if (err) throw err;
        console.log('Cardapio created!');

        // get all the users
        Cardapios.find({}, function findCallback (err, cardapios) {
            if (err) throw err;

            // object of all the users
            console.log(cardapios);
                        db.collection('cardapios').drop(function dropCallback () {
                db.close();
            });
        });
    });
});