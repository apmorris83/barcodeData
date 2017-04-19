const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    code: String,
    name: String,
    packaging: String
});

module.exports = mongoose.model('products', productSchema);