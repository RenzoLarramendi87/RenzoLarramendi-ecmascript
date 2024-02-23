const fs = require('fs');

class ProductManager {
    static #ultimoId = 1;
    #products;
    path;

    constructor(path) {
        this.#products = [];
        this.path = path;
    }

    getProducts() {
        return this.#products;
    }

    #getNuevoId() {
        const id = ProductManager.#ultimoId;
        ProductManager.#ultimoId++;
        return id;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const existingCode = this.#products.some(prod => prod.code === code);
        if (existingCode) {
            console.error("Este codigo ya existe");
            return;
        }

        const product = {
            id: this.#getNuevoId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.#products.push(product);
        this.#guardarProductosEnArchivo();
    }

    updateProduct(productId, updatedFields) {
        const productIndex = this.#products.findIndex(prod => prod.id === productId);
        if (productIndex === -1) {
            console.error("Producto no encontrado");
            return;
        }

        this.#products[productIndex] = { ...this.#products[productIndex], ...updatedFields };
        this.#guardarProductosEnArchivo();
    }

    deleteProduct(productId) {
        const productIndex = this.#products.findIndex(prod => prod.id === productId);
        if (productIndex === -1) {
            console.error("Producto no encontrado");
            return;
        }

        this.#products.splice(productIndex, 1);
        this.#guardarProductosEnArchivo();
    }

    getProductById(productId) {
        return this.#products.find(prod => prod.id === productId);
    }

    #guardarProductosEnArchivo() {
        fs.writeFileSync(this.path, JSON.stringify(this.#products, null, 2), 'utf8');
    }
}


const manager = new ProductManager('./productos.json');
manager.addProduct('titulo1', 'descripcion1', 50, 'sin imagen', 'abc123', 25);
console.log(manager.getProducts());

manager.updateProduct(1, { title: 'Nuevo titulo', price: 100 });
console.log(manager.getProducts());


manager.deleteProduct(1);
console.log(manager.getProducts());
