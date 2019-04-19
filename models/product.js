var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name 		: {type: String, required: true},
    img		    : {type: String, required: true},
    des 		: {type: String, required: true},
    price   		: {type: Number, required: true},
    category 	: {type: String, required: true}
});

module.exports = mongoose.model('Product', schema);