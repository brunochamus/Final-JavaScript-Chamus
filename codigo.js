//Array de objetos con los productos
const productos = [{
        id: 1,
        nombre: 'Shampoo',
        precio: 1200,
        foto: "img/shampoo-auto.jpg"
    },
    {
        id: 2,
        nombre: 'Revividor de caucho', 
        precio: 2600,
        foto: "img/revividor.jpg"
    },
    {
        id: 3,
        nombre: 'Limpiador de llantas',
        precio: 4900,
        foto: "img/limpia-llantas.jpg"
    },
    {
        id: 4,
        nombre: 'Cera de brillo',
        precio: 2900,
        foto: "img/cera-brillo.jpg"
    },
    {
        id: 5,
        nombre: 'Cera de interiores',
        precio: 3100,
        foto: "img/cera-int.jpg"
    },
    {
        id: 6,
        nombre: 'Limpia vidrios',
        precio: 2600,
        foto: "img/limpia-vidrios.jpg"
    },
    {
        id: 7,
        nombre: 'Llanta de auto',
        precio: 23000,
        foto: "img/llanta-auto.jpg"
    },
    {
        id: 8,
        nombre: 'Llanta de todoterreno',
        precio: 32000,
        foto: "img/llanta-toterreno.jpg"
    },
    {
        id: 9,
        nombre: 'Suspension de auto',
        precio: 36000,
        foto: "img/suspension.jpg"
    },
    {
        id: 10,
        nombre: 'Suspension de todoterreno',
        precio: 59000,
        foto: "img/suspension-toterreno.jpg"
    },
    {
        id: 11,
        nombre: 'Escape',
        precio: 120000,
        foto: "img/escape.jpg"
    },
    {
        id: 12,
        nombre: 'Luces',
        precio: 5000,
        foto: "img/luces.jpg"
    },
    {
        id: 13,
        nombre: 'Aceite',
        precio: 7000,
        foto: "img/aceite.jpg"
    },
    {
        id: 14,
        nombre: 'Neumatico',
        precio: 52000,
        foto: "img/neumatico.jpg"
    },
    {
        id: 15,
        nombre: 'Filtro',
        precio: 3000,
        foto: "img/filtros.jpg"
    },
];

//guardado array de objetos todos dentro de una sola key en formato JSON
const guardarProd = (clave, valor) => { localStorage.setItem(clave, valor)};
guardarProd("ListProd", JSON.stringify(productos));

let carrito = [];

//Funcion con bucle para las cards creadas con innerHTML
let contenedor = document.getElementById("produc");

function cardProducto(){
    for (const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card.img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-text">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary align-bottom">Agregar al carro</button>
                </div>
            </div>
        `;
    }

//Evento para agregar producto al carrito
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener(`click`,()=>{
            agregarCarrito(producto);
        });
    });
}

cardProducto();

function agregarCarrito(prodAgregar){
    carrito.push(prodAgregar);

    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAgregar.nombre}</td>
            <td>$ ${prodAgregar.precio}</td>
        </tr>
    `;

//Funcion para sumar total de carrito
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText='Total a pagar : $ ' +totalCarrito;
}
