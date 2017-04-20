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

router.route('/products')
    .post(function (request, response) {
        let product = new productModel(request.body);
        product.save(function (err, product) {
            if (err) {
                return response.status(500).send({ err: err });
            }
            response.status(201).send({ product: product });
        });
    });

    router.route('/products/:product_id')
      .delete(function (request, response) {
        productModel.findById(request.params.product_id).remove(function (error, products) {
          if (error) return response.status(404).send({reason: 'PRODUCT NOT FOUND'});
          response.status(200).send({data: products});
        });
      });

module.exports = router;
