//Ingreso de cliente
alert('Bienvenido a SpeedCar');
alert('Somos un comercio dedicado a la estetica vehicular, amamos los autos!');

var edad = '';
edad = prompt ('Ingresa tu edad');
if (edad >= 18);
else {
    alert ('Debes ingresar con la supervision de un adulto, debes ser mayor de edad para conducir');
}

let cliente = '';
cliente = prompt ('Ingresa tu nombre:');
    alert ('Hola ' + cliente);

const productos = [
    {id: 1,nombre: 'Shampoo', precio: 1200},
    {id: 2,nombre: 'Revividor de caucho', precio: 2600},
    {id: 3,nombre: 'Limpiador de llantas', precio: 4900},
    {id: 4,nombre: 'Cera de brillo', precio: 2900},
    {id: 5,nombre: 'Cera de interiores', precio: 3100},
    {id: 6,nombre: 'Limpia vidrios', precio: 2600},
];
let carrito = [];

let seleccion = prompt('Hola desea comprar un producto? si/no');

while (seleccion != 'si' && seleccion != 'no') {
    alert ('Por favor ingrese una de las opciones')
    seleccion = prompt ('Desea comprar un producto? (si / no)')
}
if (seleccion == 'si'){
    let mostrarProductos = productos.map ((productos) => productos.id + '-' + productos.nombre + ' $ ' + productos.precio );
    alert(mostrarProductos.join (' / '));
}else if ( seleccion == 'no') {
    alert('Gracias por visitarnos lo esperamos la proxima!')
}

while ( seleccion != 'no'){
    let productos = parseInt(prompt('Agrega un producto a tu carrito con su numero de item'));
    let precio = 0;

    if (productos == 1 || productos == 2 || productos == 3 || productos == 4 || productos == 5 || productos == 6){
        switch (productos){
            case 1:
            precio += 1200;
            break;
            case 2:
            precio += 2600;
            break;
            case 3:
            precio += 4900;
            break;
            case 4:
            precio += 2900;
            break;
            case 5:
            precio += 3100;
            break;
            case 6:
            precio += 2600;
            break;
            default:
            break;
        }

    let unidades = parseInt(prompt('Cuantas unidades desea llevar?'))

    carrito.push({productos ,unidades, precio})
        console.log (carrito);
    }else{
        alert('No contamos con ese producto');
    }

    seleccion = prompt ('Quiere comprar mas productos?');
    while (seleccion == 'no'){
        alert('Gracias por su compra!');
        carrito.forEach((carritoFinal) =>{
            console.log (`productos: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, Total por producto: ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

const subTotal = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0);
console.log (`El subtotal a pagar por su compra es: ${subTotal}`)

const funcionTotal = () => {
    let resultado = subTotal * 1.21 ;
    console.log (`El total con IVA incluido es de ${resultado}`)
}

funcionTotal();