
class ProductManager {
    static ultimoId = 0;

    constructor () {
        this.productos = [];
    }

    addProduct (nombre, descripcion, img, precio, stock) {
        ProductManager.ultimoId++;

        const nuevoProducto = {
            id: ProductManager.ultimoId,
            nombre,
            descripcion,
            img,
            precio,
            stock,
        }

        if(!nombre || !descripcion || !img || !precio || !stock ) {
            console.error("Por favor completar todos los datos")}
    
        else {this.productos.push(nuevoProducto)};
    }
    // Tengo una consulta. ¿Hace falta validar el id sabiendo que es un dato static y que la funcion addProduct lo va aumentando de 1 en 1?

    getProducts () {return this.products}
    
    getProductById (id) {
        const elProductoExiste = this.productos.find((item) => item.id === id);

        if(elProductoExiste) {console.log(`El producto id: ${id} existe`)
        } else {console.error(`El producto id: ${id} no existe`)}
}
}

const productoNuevo = new ProductManager();

console.log(productoNuevo);

productoNuevo.addProduct("Mesa", "Mesa de Quebracho", "Url Imagen", 400000, 3);

productoNuevo.addProduct("Banco", "Banco de Quebracho", "Url Imagen", 100000, 10);

productoNuevo.addProduct("Estante", "Url Imagen", 60000, 5);

console.log(productoNuevo);

console.log(productoNuevo.getProductById(2))
