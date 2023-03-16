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
cliente = prompt ('Ingresa tu nombre:')
    alert ('Hola ' + cliente)
//variables declarando total y prompt para ingresar a menu de compra
let total = 0;
let listaCarro = '';
let compra = prompt('¿Desea comprar un producto para su vehiculo? (si / no)');
//bucle
while(compra == 'si'){
    let producto = prompt ('1-Shampoo $1200\n2-Revividor de caucho $2600\n3-Limpiador de llantas $4900\n4-Cera de brillo $2900\n5-Cera de interior $3100\n6-Limpa vidrios $2600');
    switch(producto){
        case '1':
            alert('Agregaste Shampoo al carro!');
            sumaaTotal(1200);
            break;
        case '2':
            alert('Agregaste Revividor de caucho al carro!');
            sumaaTotal(2600);
            break;
        case '3':
            alert('Agregaste Limpiador de llantas al carro!');
            sumaaTotal(4900);
            break;
        case '4':
            alert('Agregaste Cera de brillo al carro!');
            sumaaTotal(2900);
            break;
        case '5':
            alert('Agregaste cera de interior al carro!');
            sumaaTotal(3100);
            break;
        case '6':
            alert('Agregaste limpia vidrios al carro!');
            sumaaTotal(2600);
            break;
        default:
            alert('Producto inexistente');
            break;
    }
    compra = prompt('¿Desea comprar otro producto para su vehiculo? (si / no)');
}

alert('Total de su carro es de $'+total)


//function para sumar el total que se agrega al carro
function sumaaTotal(precio){
    total = total + precio;
    alert('El total de su compra es de $'+total);
}
