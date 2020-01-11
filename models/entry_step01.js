const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entryStep01Schema = new Schema({
    Email: String,
    _1_1_1: String,
    _1_1_2: String,
    _1_1_3: String,
    _1_2_1: String,
    _1_2_2: String,
    _1_2_3: String,
    _1_2_4: String,
    _1_2_5: String,
    _1_2_6: String,
    _1_2_7: String,
    _1_2_8: String,
    _1_2_9: String,
    _1_2_10: String,
    _1_3: String,
    _1_4_1: String,
    _1_4_2: String,
    _1_4_3: String,
    _1_4_4: String,
    _1_4_5: String,
    _1_5: String,
    _1_6: String,
});

const entryStep01 = mongoose.model('entryStep01', entryStep01Schema);

module.exports = entryStep01;