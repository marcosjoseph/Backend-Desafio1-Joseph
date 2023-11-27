
class ProductManager {
    static ultimoId = 0;

    constructor () {
        this.productos = [];
    }

    addProduct (nombre, descripcion, img, precio, stock, code) {

        let codeExistente = this.productos.some((dato) => dato.code === code);
            
        if( nombre === undefined || descripcion === undefined || img === undefined || precio === undefined || stock === undefined || code === undefined) {
            console.error ("Por favor completar todos los datos")
        } else if (codeExistente) {console.error("El código ya existe, por favor ingrese uno nuevo.")
        } else {
            ProductManager.ultimoId++;
            const nuevoProducto = {
                id: ProductManager.ultimoId,
                nombre,
                descripcion,
                img,
                precio,
                stock,
                code,
            }
            this.productos.push(nuevoProducto)};
    }

    getProducts () {return this.products}
    
    getProductById (id) {
        const elProductoExiste = this.productos.find((item) => item.id === id);

        if(elProductoExiste) {console.log(`El producto id: ${id} existe`)
        } else {console.error(`El producto id: ${id} no existe`)}
}
}

const productoNuevo = new ProductManager();

console.log(productoNuevo);

productoNuevo.addProduct("Mesa", "Mesa de Quebracho", "Url Imagen", 400000, 3, 1000);

productoNuevo.addProduct("Banco", "Banco de Quebracho", "Url Imagen", 100000, 10,1001);

productoNuevo.addProduct("Banco2", "Banco de Quebracho", "Url Imagen", 100000, 10,1001);

productoNuevo.addProduct("Estante", "Url Imagen", 60000, 5);

console.log(productoNuevo);

console.log(productoNuevo.getProductById(2))
