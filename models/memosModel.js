var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment')

var memosSchema = new Schema({	'title' : String,	'memo' : String,	'created_at' : String,	'updated_at' : String});

memosSchema.plugin(autoIncrement.plugin, 'memos')
module.exports = mongoose.model('memos', memosSchema);
