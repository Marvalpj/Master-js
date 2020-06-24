'use strict'
//slice: epieza a partir del parametro 2
//el uno es la ruta del archivo
var params = process.argv.slice(2)
// console.log(params)

var numero1 = parseFloat(params[0])
var numero2 = parseFloat(params[1])

var plantilla = `
    la suma es: ${numero1 + numero2}
    la resta es: ${numero1 - numero2}
    la division es: ${numero1 / numero2}
    la multiplicacion es: ${numero1 * numero2}
`
console.log(plantilla)
console.log('hola mundo nodejs')