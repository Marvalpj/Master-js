var fecha = new Date()

console.log(fecha)

var year = fecha.getFullYear()
var month = fecha.getMonth() 
var day = fecha.getDate()

var txtFecha = `
    El anio es: ${year}
    El mes es: ${month}
    El dia es: ${day}
`
console.log(txtFecha)