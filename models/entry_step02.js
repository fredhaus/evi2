const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entryStep02Schema = new Schema({
    Email: String,
    _2_1: String,
    _2_2_1: String,
    _2_2_2: String,
    _2_2_3: String,
    _2_2_4: String,
    _2_2_5: String,
    _2_2_6: String,
    _2_2_7: String,
    _2_2_8: String,
    _2_2_9: String,
    _2_2_10: String,
    _2_3: String,
    _2_4_1: String,
    _2_4_2: String,
    _2_4_3: String,
    _2_4_4: String,
    _2_4_5: String,
    _2_4_6: String,
    _2_5: String,
    _2_6: String
});

const entryStep02 = mongoose.model('entryStep02', entryStep02Schema);

module.exports = entryStep02;