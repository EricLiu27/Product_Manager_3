const Product = require('../models/product.model');



module.exports.allProduct = (req, res) => {
    Product.find()
        .then(productList => res.json(productList))
        .catch((err) => res.json(err));
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch((err) => res.json(err));
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch((err) => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch((err) => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch((err) => res.json(err));
}
