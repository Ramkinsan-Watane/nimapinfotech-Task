// controllers/categoryController.js
const Category = require('../models/category');

exports.getCategories = (req, res) => {
    Category.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.addCategory = (req, res) => {
    const { name } = req.body;
    Category.add(name, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(results);
    });
};
