//a las funcionas le puedes indicar el tipo de dato de los parametros
//y le indicas que tipo de dato retorna
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return 'el numero es ' + numero;
}
console.log(getNumero());
