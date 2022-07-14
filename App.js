const mostrarProductos = () => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach( producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<div class="card-image">
                            <img src=${producto.img}>
                            <span class="card-title">${producto.nombre}</span>
                            <b>$ ${producto.precio}</b>
                            <button id="agregar${producto.id}" class="boton-agregar">AGREGAR</button>
                            
                        </div>
                        `
        contenedor.appendChild(div);
    
        }
    );
};

mostrarProductos();