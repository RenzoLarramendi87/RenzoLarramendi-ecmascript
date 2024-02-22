class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
        
    }
    //Metodo para agregar un producto
    addProduct(product) {
        if (!this.isValidProduct(product)) {
            console.error('El producto no es valido.');
            return;
        }

        product.id = this.nextProductId++; 
        this.products.push(product);
        console.log('Producto agregado:' , product);
    }
    //Metodo para validar un producto
    isValidProduct(product) {
        if (!product || !product.code || !product.name || product.price) {
            console.error('Todos los campos son obligatorios.');
            return false;               
        }

        if (this.products.some(p => p.code === product.code)) {
            console.error('El codigo del producto ya existe.');
            return false;
        }
            return true;
    }

    //Metodo para obtener todos los productos
    getAllProducts() {
        return this.products;        
    }

    //Metodo para buscar un producto por su ID
    getProductById(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            return product;
        }
            else {
                console.error('Not found');
            }
    }

    


}

const productManagerInstance = new ProductManager();

productManagerInstance.addProduct("producto prueba 1", "Este es un producto prueba 1", 200, "Sin imagen", "abc121", 25);
productManagerInstance.addProduct("producto prueba 2", "Este es un producto prueba 1", 200, "Sin imagen", "abc122", 25);
productManagerInstance.addProduct("producto prueba 3", "Este es un producto prueba 1", 200, "Sin imagen", "abc122", 25);
productManagerInstance.addProduct("producto prueba 6", "Este es un producto prueba 1", 200, "Sin imagen", "abc126", 25);
productManagerInstance.addProduct("producto prueba 7", "Este es un producto prueba 1", 200, "Sin imagen", "abc127", 25);
productManagerInstance.addProduct("producto prueba 8", "Este es un producto prueba 1", 200, "Sin imagen", "abc128", 25);
productManagerInstance.addProduct("producto prueba 9", "Este es un producto prueba 1", 200, "Sin imagen", "abc129", 25);
productManagerInstance.addProduct("producto prueba 10", "Este es un producto prueba 1", 200, "Sin imagen", "abc1210", 25);


// Codigo repetido
productManagerInstance.addProduct("producto prueba 4", "Este es un producto prueba 1", 200, "Sin imagen", "abc124", 25);

// Sin todos los campos completos
productManagerInstance.addProduct("producto prueba 5", "Este es un producto prueba 1", 200, "Sin imagen", 25
);





console.log(productManager.getProductsById(6))