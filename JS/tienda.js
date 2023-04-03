const hamburger = document.querySelector(`.header .nav-bar .nav-list .hamburger`)
const mobileMenu = document.querySelector(`.header .nav-bar .nav-list ul`)
const header = document.querySelector(`.header.container`)


hamburger.addEventListener(`click`, () => {
    hamburger.classList.toggle(`active`)
    mobileMenu.classList.toggle(`active`)
})

document.addEventListener(`scroll`, () => {
    let scroll_position = window.scrollY
    if(scroll_position > 250){
        header.style.backgroundColor = "#070606dd";
    } else{
        header.style.backgroundColor = "#07060671"
    }
})



// TIENDA

    const productos = [
        {
            "id": "pantalon-01",
            "titulo": "pantalon 01",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/646021-500-auto?v=1763546653&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": "$22000"
        },
        {
            "id": "pantalon-02",
            "titulo": "pantalon 02",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/596625-500-auto?v=1762781916&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": "$20000"
        },
        {
            "id": "pantalon-03",
            "titulo": "pantalon 03",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/597194-500-auto?v=1763832324&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": "$18000"
        },
        {
            "id": "pantalon-04",
            "titulo": "pantalon 04",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/613057-500-auto?v=1763833694&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": "$24000"
        },
        {
            "id": "pantalon-05",
            "titulo": "pantalon 05",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/638452-500-auto?v=1761777159&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": "$19000"
        },
        {
            "id": "pantalon-06",
            "titulo": "pantalon 06",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/407964-500-auto?v=1763910986&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": "$18000"
        },
        {
            "id": "remera-01",
            "titulo": "remera 01",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/731449-500-auto?v=1763807349&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Remeras",
                "id": "remeras"
            },
            "precio": "$11000"
        },
        {
            "id": "remera-02",
            "titulo": "remera 02",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/731440-500-auto?v=1763906942&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Remeras",
                "id": "remeras"
            },
            "precio": "$10000"
        },
        {
            "id": "remera-03",
            "titulo": "remera 03",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/742142-500-auto?v=1763676798&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Remeras",
                "id": "remeras"
            },
            "precio": "$13000"
        },
        {
            "id": "remera-04",
            "titulo": "remera 04",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/683603-500-auto?v=1763414024&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Remeras",
                "id": "remeras"
            },
            "precio": "$11000"
        },
        {
            "id": "remera-05",
            "titulo": "remera 05",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/572610-500-auto?v=1761776476&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Remeras",
                "id": "remeras"
            },
            "precio": "$12000"
        },
        {
            "id": "remera-06",
            "titulo": "remera 06",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/638466-500-auto?v=1763911216&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Remeras",
                "id": "remeras"
            },
            "precio": "$10000"
        },
        {
            "id": "medias-01",
            "titulo": "medias 01",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/525131-500-auto?v=1763924369&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Medias",
                "id": "medias"
            },
            "precio": "$5000"
        },
        {
            "id": "medias-02",
            "titulo": "medias 02",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/525131-500-auto?v=1763924369&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Medias",
                "id": "medias"
            },
            "precio": "$4000"
        },
        {
            "id": "medias-03",
            "titulo": "medias 03",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/525131-500-auto?v=1763924369&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Medias",
                "id": "medias"
            },
            "precio": "$3000"
        },
        {
            "id": "medias-04",
            "titulo": "medias 04",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/525131-500-auto?v=1763924369&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Medias",
                "id": "medias"
            },
            "precio": "$3000"
        },
        {
            "id": "zapatillas-01",
            "titulo": "zapatillas 01",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/743563-500-auto?v=1763911225&width=500&height=auto&aspect=true ",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$20000"
        },
        {
            "id": "zapatillas-02",
            "titulo": "zapatillas 02",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/730311-500-auto?v=1763891921&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$22000"
        },
        {
            "id": "zapatillas-03",
            "titulo": "zapatillas 03",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/730389-500-auto?v=1763833096&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$24000"
        },
        {
            "id": "zapatillas-04",
            "titulo": "zapatillas 04",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/726722-500-auto?v=1763906648&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$26000"
        },
        {
            "id": "zapatillas-05",
            "titulo": "zapatillas 05",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/741923-500-auto?v=1763738917&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$22000"
        },
        {
            "id": "zapatillas-06",
            "titulo": "zapatillas 06",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/726089-500-auto?v=1763633110&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$20000"
        },
        {
            "id": "zapatillas-07",
            "titulo": "zapatillas 07",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/725998-500-auto?v=1763911226&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Zapatillas",
                "id": "zapatillas"
            },
            "precio": "$22000"
        },
        {
            "id": "abrigos-01",
            "titulo": "abrigos 01",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/611576-500-auto?v=1763866697&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": "$40000"
        },
        {
            "id": "abrigos-02",
            "titulo": "abrigos 02",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/370465-500-auto?v=1761780352&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": "$42000"
        },
        {
            "id": "abrigos-03",
            "titulo": "abrigos 03",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/496235-500-auto?v=1762277325&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": "$42000"
        },
        {
            "id": "abrigos-04",
            "titulo": "abrigos 04",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/558076-500-auto?v=1763373899&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": "$42000"
        },
        {
            "id": "abrigos-05",
            "titulo": "abrigos 05",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/611576-500-auto?v=1763866697&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": "$42000"
        },
        {
            "id": "abrigos-06",
            "titulo": "abrigos 06",
            "imagen": "https://grid0.vtexassets.com/arquivos/ids/600525-500-auto?v=1762873670&width=500&height=auto&aspect=true",
            "categoria":{
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": "$42000"
        }
    ];


const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector(("#titulo-principal"))
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


function cargarProductos (productosElegiods){

    contenedorProductos.innerHTML = "";

    productosElegiods.forEach((producto) => {

        const div = document.createElement("div")
        div.classList.add("productos")
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
                        <div class="producto-detalle">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">${producto.precio}</p>
                            <button class="producto-agregar" id="${producto.id}">Agregar</button>
                        </div>
        `
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos)


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach( boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id !="todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productosBoton = productos.filter( producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        }else{
            tituloPrincipal.innerText = "Todos los Producto"
            cargarProductos(productos)
        }
    } )
})

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()
}else{
    productosEnCarrito = []
}



function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito()

    localStorage.setItem("produtos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito
}






