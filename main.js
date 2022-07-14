
const carrito = [];

setTimeout(()=>{

    let compra = prompt("Desea comprar algo?");

    if (compra == null){
        
        alert("No has seleccionado ningún producto");
        // no
    
    }
    
    if (compra == "si") {

        let filtrar = prompt(`
        ¿Deseas filtrar por precio? si/no
        `).toLowerCase();

        if (filtrar == "si") {
            let precio = Number(prompt("Ingrese el precio que desea filtrar (precio máximo):"));

            const productosFiltrados = filtrarPrecio(precio);

            console.log(productosFiltrados);

            // Aqui puede ir la logica del else de abajo
            // function agregarProductosAlCarrito[array, id]{}
        }

        else {

            let eleccionProductos = "";
    
            while (eleccionProductos != "no".toLowerCase()) {
                
                eleccionProductos = prompt(`
                ¿Qué productos deseas agregar al carrito?
                Para dejar de comprar escribir no
                Digite 1 para comprar Silla Outzen
                Digite 2 para comprar Silla Montreal
                Digite 3 para comprar Sillon Executive
                Digite 4 para comprar Cama Flex
                Digite 5 para comprar Cama Roble
                Digite 6 para comprar Cama Teen
                Digite 7 para comprar Mesa Nido
                Digite 8 para comprar Mesa Office
                Digite 9 para comprar Mesa Top
                `)
        
                if (eleccionProductos == null) {
                    
                    break;
                }
        
                if (eleccionProductos == "no".toLowerCase()){
                    alert("Gracias por visitarnos, vuelva cuando quiera");
                    break;
                }
        
                agregarAlCarrito(parseInt(eleccionProductos));
                console.log(sumarTotal());
            }

            let eliminar = prompt(`¿Deseas eliminar algún producto del carrito? si/no`).toLowerCase();
        
            if (eliminar == "si") {
                console.log(carrito);
                eliminarProductoCarrito();
            }
        
        }
    
            
        }else{
            alert("Gracias por visitarnos, vuelva cuando quiera");
    
        }
  

},1000);


function agregarAlCarrito(id) {
        
        let producto = productos.find(producto => producto.id === id);
        
        let productoEnCarrito = carrito.find(producto => producto.id === id);
        //si producto esta en el carrito impacta en la cantidad
        if(productoEnCarrito){

            productoEnCarrito.cantidad++;
            console.log(carrito);
        }
        else{
            //si producto no esta en el carrito pushear
            producto.cantidad = 1;
            carrito.push(producto);
            console.log(carrito);
        }
        
    }

function sumarTotal() {
        let total = 0;
        carrito.forEach(producto => {
            total = total + producto.cantidad * producto.precio;
        })
        return total;
    }

function eliminarCarrito() {
    
}

function filtrarPrecio(precio) {

    let filtrados = productos.filter(producto => producto.precio <= precio);

    return filtrados;
}

function eliminarProductoCarrito() {

    let id = Number(prompt("Ingrese el id del producto que desea eliminar"));

    let producto = carrito.find(producto => producto.id === id);

    if(productoEnCarrito){
        if(productoEnCarrito.cantidad > 1){
            productoEnCarrito.cantidad--;
            console.log(carrito);
        }

        else{
            carrito.splice(carrito.indexOf(productoEnCarrito), 1);
            console.log(carrito);
        }

    }else{

        alert("El producto no existe en el carrito");
    }
    
}
