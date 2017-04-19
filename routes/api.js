const express = require('express');
const router = express.Router();
const productModel = require('../models/products');

router.route('/').get(function (request, response) {
    response.status(200).send({ status: 'OK' });
});

router.route('/products')
    .get(function (request, response) {
        productModel.find({}, function (error, products) {
            if (error) {
                return response.status(500).send({ error: error });
            }
            console.log(typeof products[0]._id);
            response.status(200).send({ products: products });
        });
    });

router.route('/products/:code')
    .get(function (request, response) {
        productModel.find({ code: request.params.code }, function (error, products) {
            if (error) {
                return response.status(500).send({ error: error });
            }
            response.status(200).send({ products: products });
        });
    });

module.exports = router;