
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


const guardarProd = (clave, valor) => { localStorage.setItem(clave, valor)};
guardarProd("ListProd", JSON.stringify(productos));


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

let contenedor = document.getElementById("produc");

let finalizarBtn = document.getElementById("finalizar");

miJSON();

(carrito.length != 0) && carroAband();


function carroAband(){
    for(const producto of carrito){
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">Quitar producto</button></td>
        </tr>
    `;
    }
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar u$: "+totalCarrito;
}

function elimProd(ev){
    let fila = ev.target.parentElement.parentElement;
    let id = fila.children[0].innerText;
    let indice = carrito.findIndex(producto => producto.id == id);
    carrito.splice(indice,1);
    fila.remove();
    let preciosAcumulados = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    total.innerText="Total a pagar $: "+preciosAcumulados;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}


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


    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener(`click`,()=>{
            agregarCarrito(producto);
        });
    });
}

cardProducto();

function agregarCarrito(prodAgregar){
    carrito.push(prodAgregar);
    Toastify({
        text: `Sumaste ${prodAgregar.nombre} al carro`,
        duration: 4000,
        gravity: 'center',
        position: 'center',
        style: {
            background: '#ff0000'
        }
    }).showToast();

    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAgregar.nombre}</td>
            <td>$ ${prodAgregar.precio}</td>
            <td><button class="btn btn-light" onclick="elimProd(event)">Quitar producto</button></td>
        </tr>
    `;


    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText='Total a pagar : $ ' +totalCarrito;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

finalizarBtn.onclick=()=>{
    carrito=[];
    document.getElementById('tablabody').innerHTML='';
    document.getElementById('total').innerText = 'Total a pagar $:';
    Swal.fire({
        title: 'Usted esta finalizando su compra',
        text: "¿Desea continuar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Compra efectuada con exito',
            '¡Recibira su pedido en 24hs!',
            'success'
            )
        }
    })

        localStorage.removeItem("carrito");
    }
    
    async function miJSON(){
        const URLJSON = '/productos.json';
        const respuesta = await fetch(URLJSON);
        const data = await respuesta.json();
        productos = data;

        cardProducto();
    }