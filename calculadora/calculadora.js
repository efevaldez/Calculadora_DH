//SUMAS
let sumar = require ('./sumar');
console.log (sumar (10 , 2));


//RESTAS
let restar = require ('./restar');
console.log (restar (10 , 2));

//MULTIPLICACIÓN
let multiplicar = require ('./multiplicar');
console.log (multiplicar (10 , 2));
console.log (multiplicar(10 , 0));

//DIVIDIR
let dividir = require ('./dividir');
console.log (dividir (10 , 2));
console.log (dividir (8, 0));


// Si hubiésemos programado todo en un mismo archivo en vez de generar uno por cada operación, nuestro código sería más extenso y desorganizado.

//Es mejor camino generar distintos archivos y luego requerirlos en un solo uso porque de esta forma podemos principalmente entender más nuestro código, y poder tener una mejor práctica siendo más ordenadas/os.

// Seguramente esta metodología de trabajo sea una constante de aquí adelante, además es de gran ayuda!
