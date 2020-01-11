const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entryHomeSchema = new Schema({
    NaamSchool: String,
    Adres: String,
    NaamInvuller: String,
    Functie: String,
    Postcode: String,
    Email: String,
    Plaats: String,
    Telefoon: String,  
});

const entryHome = mongoose.model('entryHome', entryHomeSchema);

module.exports = entryHome;