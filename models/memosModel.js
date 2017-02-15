var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment')

var memosSchema = new Schema({	'title' : String,	'memo' : String,	'created_at' : Date,	'updated_at' : Date});

memosSchema.plugin(autoIncrement.plugin, 'memos')
module.exports = mongoose.model('memos', memosSchema);
