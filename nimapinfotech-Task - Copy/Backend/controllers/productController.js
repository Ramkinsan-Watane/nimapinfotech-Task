// controllers/productController.js
const Product = require('../models/product');

exports.getProducts = (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    Product.getAll(page, pageSize, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.addProduct = (req, res) => {
    const { name, category_id } = req.body;
    Product.add(name, category_id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(results);
    });
};
