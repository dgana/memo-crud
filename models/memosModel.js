var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var memosSchema = new Schema({

module.exports = mongoose.model('memos', memosSchema);