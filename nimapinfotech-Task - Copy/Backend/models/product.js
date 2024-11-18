// models/product.js
const db = require('../config/db');

const Product = {
    getAll: (page, pageSize, callback) => {
        const offset = (page - 1) * pageSize;
        db.query(
            `SELECT p.id, p.name AS productName, c.name AS categoryName, c.id AS categoryId 
             FROM products p
             JOIN categories c ON p.category_id = c.id
             LIMIT ? OFFSET ?`,
            [pageSize, offset],
            callback
        );
    },
    add: (name, category_id, callback) => {
        db.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, category_id], callback);
    },
    update: (id, name, category_id, callback) => {
        db.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, category_id, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    }
};

module.exports = Product;
