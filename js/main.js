//Calcula todas la opciones de cuotas disponibles y escribir salir te dira cuanto termianl devolviendo en cada plan
/*
const simuladorDePrestamos = [];

let montoIngresado;
let cuotaIngresada;
let continuarSimulando;

//ciclo para que solo permita salir si escribo lapalabra salir
do {
    //ciclo con alert para que no ingrese otra cosa que no sea un numero.
    do {
        montoIngresado = parseInt(prompt("ingrese el monto que desea solicitar"));
    } while (isNaN(montoIngresado));

    //ciclo para que no ingrese otra cosa que no sea el plan de cuota mencionado.
    do {
        cuotaIngresada = parseInt(prompt("ingrese si lo requiere en 12, 24, 36 o 48 cuotas"));
        if (cuotaIngresada !== 12 && cuotaIngresada !== 24 && cuotaIngresada !== 36 && cuotaIngresada !== 48) {
            alert("Plan de cuotas exedido ")
        }
    } while (cuotaIngresada !== 12 && cuotaIngresada !== 24 && cuotaIngresada !== 36 && cuotaIngresada !== 48);


    // obejto con numero de cuotas y valores de las mismas.

    const cuotasMultiplicadores = {
        12: 0.2,
        24: 0.3,
        36: 0.6,
        48: 0.9
    };

    //funcion para realizar el calculo

    const calcular = (monto, cuota) => {
        let multiplicador = 0;

        if (cuotasMultiplicadores[cuota]) {
            multiplicador = cuotasMultiplicadores[cuota];
        }

        return monto * multiplicador * cuota;
    };

    let resultado = calcular(montoIngresado, cuotaIngresada);

    //creo un objeto para cada  simulacion.

    let prestamoSimulado = {
        monto: montoIngresado,
        cuota: cuotaIngresada,
        devolves: resultado
    };

    simuladorDePrestamos.push(prestamoSimulado);

    
    continuarSimulando = prompt("Escriba SALIR para terminar de simular y ver el RESULTADO de lo contrario presione ACEPTAR.").toLowerCase();

} while (continuarSimulando !== 'salir');

//mostrar resultado de todo lo simulado

simuladorDePrestamos.forEach((opcion1) => {
    console.log(opcion1);
})

*/// ctrl+} = Comment

/*array de productos*/
const productos = [
    /*categorias Mates*/
    {
        id: "Mate",
        titulo: "Mate",
        imagen:"../img/mate camionero.jpeg",
        categoria: {
            nombre: "Mates",
            id: "Camionero"
        },
        precio: 4500
    },
    {
        id: "MateClasico",
        titulo: "MateClasico",
        imagen: "../img/mate rustico.jpg",
        categoria: {
            nombre: "Mates",
            id: "Clasico"
        },
        precio: 2500
    },
   
    // categorias bombillas
    {
        id: "Bombilla",
        titulo: "Bombilla",
        imagen: "../img/bombilla.jpg",
        categoria: {
            nombre: "Bombillas",
            id: "Bombillas"
        },
        precio: 1000
    },
    {
        id: "BombillaPico",
        titulo: "PicoDeLoro",
        imagen: "../img/pico de loro.jpg",
        categoria: {
            nombre: "Bombillas",
            id: "Bombillas"
        },
        precio: 2000
    },
    /*categorias Termos*/
    {
        id: "Termo",
        titulo: "Stanley",
        imagen: "../img/TermoStanley.jpg",
        categoria: {
            nombre: "Termos",
            id: "TermosStanley"
        },
        precio: 8000
    },
    {
        id: "CoolemanTermo",
        titulo: "Cooleman",
        imagen: "../img/Termocoleman.jpg",
        categoria: {
            nombre: "Termos",
            id: "TermosCooleman"
        },
        precio: 6500
    },
   
]

const contenedorProdcutos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

//funcion para cargar prodcutos al div
function cargarProdcutos(CategoriaElegida) {

    contenedorProdcutos.innerHTML = "";

    CategoriaElegida.forEach(productos => {
        const div = document.createElement("div");
        //al div le damos la class para que tenga la misma clase creada en el html
        div.classList.add("prodcuto-card");

        div.innerHTML = `
        <img class="producto-imagen" src="${productos.imagen}" alt="${productos.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${productos.titulo}</h3>
            <p class="producto-precio">$${productos.precio}</p>
            <button class="producto-agregar" id=${productos.id}>Agregar</button>
        </div>
        `;

        contenedorProdcutos.append(div);
    })
    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        //lo hago un condicional para que no quede el home vacio, y digo si es diferente al home  y sino que haga un array de cargar todos con "la funcion cargar prodcutos(productos)"
        if (e.currentTarget.id != "Home") {

            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosElegidos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

            cargarProdcutos(productosElegidos);
        } else {

            tituloPrincipal.innerText = "Home";
            //llamo a la funcion que muestra todos los productos
            cargarProdcutos(productos);
        }

    })
})


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCArrito);
    });
}
// para que cuando se recargue la pagina no se vuleva a cero el carrito
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarnumero();
} else {

    productosEnCarrito = [];
}
function agregarAlCArrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarnumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarnumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}