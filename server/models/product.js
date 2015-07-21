var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: String
});
var Products = mongoose.model('Products', ProductSchema);
