const ProductController = require('../controllers/product.controllers');

module.exports = app => {
    app.get('/api/products', ProductController.allProduct);
    app.get('/api/products/:id', ProductController.oneProduct);
    app.post('/api/products', ProductController.addProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}