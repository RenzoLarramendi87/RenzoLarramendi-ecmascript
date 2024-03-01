const fs = require('fs')

const express = require('express');
const ProductManager = require('../RenzoLarramendi');

const app = express();


app.use(express.json());

app.get('/products', (req, res) => {
   
    const limit = parseInt(req.query.limit);

    let products = manager.getProducts();

    if (!isNaN(limit) && limit > 0) {
        products = products.slice(0, limit);
    }

    res.json({ products });
});


app.get('/products/:pid', (req, res) => {
    
    const productId = parseInt(req.params.pid);

    
    const product = manager.getProductById(productId);

    
    if (product) {
        
        res.json({ product });
    } else {
        
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});


app.listen(8080, () => {
    console.log(`Servidor Listo`);
});
