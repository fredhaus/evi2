const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entryStep04Schema = new Schema({
    Email: String,
    _4_1: String,
    _4_2_1: String,
    _4_2_2: String,
    _4_2_3: String,
    _4_2_4: String,
    _4_2_5: String,
    _4_2_6: String,
    _4_2_7: String,
    _4_2_8: String,
    _4_2_9: String,
    _4_2_10: String,
    _4_3: String,
    _4_4_1: String,
    _4_4_2: String,
    _4_4_3: String,
    _4_4_4: String,
    _4_4_5: String,
    _4_4_6: String,
    _4_5: String,
    _4_6: String
});

const entryStep04 = mongoose.model('entryStep04', entryStep04Schema);

module.exports = entryStep04;