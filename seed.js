const mongoose = require('mongoose');
const ProductDoc = require('./models/products');
const productData = require('./data/products.js');

mongoose.connect('mongodb://user:password@ds035026.mlab.com:35026/products', function (error) {
    if (error) {
        console.log(error);
        return process.exit();
    }
    productData.forEach(function (product, i) {
        let productDoc = new ProductDoc(product);
        productDoc.save(function (error) {
            if (error) {
                return console.log(error);
            }
            console.log(`Product ${i} ${product.name} saved to db!`);
        });
    });
});