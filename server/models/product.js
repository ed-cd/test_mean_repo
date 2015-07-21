var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: String,
    stock: Number
});
var Products = mongoose.model('Products', ProductSchema);
