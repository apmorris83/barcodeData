const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    code: {
      type: String,
      index: {
        unique: true,
        dropDups: true
      }
    },
    name: {
      type: String
    },
    packaging: {
      type: String
    }
});

module.exports = mongoose.model('products', productSchema);
