var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var memosSchema = new Schema({	'title' : String,	'memo' : String,	'created_at' : Date,	'updated_at' : Date});

module.exports = mongoose.model('memos', memosSchema);
