let productosEnCarrito = localStorage.getItem("produtos-en-carrito")
productosEnCarrito = JSON.parse(productosEnCarrito)


const contendeorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
let  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total")


function cargarProductosCarrito (){
    if(productosEnCarrito && productosEnCarrito.length > 0){

        
    
    contendeorCarritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.remove("disabled")
    contenedorCarritoAcciones.classList.remove("disabled")
    
    contenedorCarritoProductos.innerHTML = "";
    
    productosEnCarrito.forEach(producto => {
    
        const div = document.createElement("div")
        div.classList.add("carrito-producto")
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class="carrito-producto-imagen">
        <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>${producto.precio}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="fa-regular fa-trash-can"></i></button>
        `
    
        contenedorCarritoProductos.append(div)
    })
    }else{
        contendeorCarritoVacio.classList.remove("disabled")
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
    }

actualizarBotonesEliminar()
}

cargarProductosCarrito()

function actualizarBotonesEliminar (){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e){
    let idBoton = e.currentTarget.id
    
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    
    productosEnCarrito.splice(index,1)
    
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}

botonVaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito (){

    productosEnCarrito.length = 0
    localStorage.setItem("produtos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito()
}

