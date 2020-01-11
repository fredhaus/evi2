const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entryStep03Schema = new Schema({
    Email: String,
    _3_1_1: String,
    _3_1_2: String,
    _3_1_3: String,
    _3_1_4: String,
    _3_1_5: String,
    _3_1_6: String,
    _3_1_7: String,
    _3_2_1: String,
    _3_2_2: String,
    _3_2_3: String,
    _3_2_4: String,
    _3_2_5: String,
    _3_2_6: String,
    _3_2_7: String,
    _3_2_8: String,
    _3_2_9: String,
    _3_2_10: String,
    _3_3: String,
    _3_4_1: String,
    _3_4_2: String,
    _3_4_3: String,
    _3_4_4: String,
    _3_4_5: String,
    _3_5: String,
    _3_6: String
});

const entryStep03 = mongoose.model('entryStep03', entryStep03Schema);

module.exports = entryStep03;