
//a las funcionas le puedes indicar el tipo de dato de los parametros
//y le indicas que tipo de dato retorna

function getNumero( numero : number = 12 ) : string {
    return 'el numero es ' + numero
}

console.log( getNumero() )