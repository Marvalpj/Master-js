//string
let cadena: string = 'Pedro Jose Marval'

//number
let numero: number = 12

//booleano
let flag: boolean = true

//cualquier tipo de dato
let cualquiera:any = "55"
cualquiera = 55

//array de string
var leanguajes: Array<string> = ['PHP', 'JS' , 'TS']

let years: number[] = [12,13,14,15]

console.log(cadena , numero , flag , cualquiera)
console.log(leanguajes)
console.log(years)

//multiples tipos de datos 
let ambos: string | number = '22'
ambos = 22
console.log(ambos)

//tipos de datos personalizados
type alphanumeric = string | number


let letraNumero: alphanumeric = 22
letraNumero = '3'

console.log(letraNumero)

//la diferencia entre let y var es el alcance
// let nivel de bloque 
// var, nivel global


var num1:number = 10
var num2:number = 12

if( num1 == 10 ){
    //num1 solo extiste dentro de este bloque
    let num1:number = 5
    //num2 como es de alcance global de reescribe
    var num2:number = 6
    console.log('dentro del if ' + num1 +" "+ num2)
}
console.log('fuera del if ' + num1 + " " + num2)

