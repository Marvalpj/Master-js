//string
var cadena = 'Pedro Jose Marval';
//number
var numero = 12;
//booleano
var flag = true;
//cualquier tipo de dato
var cualquiera = "55";
cualquiera = 55;
//array de string
var leanguajes = ['PHP', 'JS', 'TS'];
var years = [12, 13, 14, 15];
console.log(cadena, numero, flag, cualquiera);
console.log(leanguajes);
console.log(years);
//multiples tipos de datos 
var ambos = '22';
ambos = 22;
console.log(ambos);
var letraNumero = 22;
letraNumero = '3';
console.log(letraNumero);
//la diferencia entre let y var es el alcance
// let nivel de bloque 
// var, nivel global
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    //num1 solo extiste dentro de este bloque
    var num1_1 = 5;
    //num2 como es de alcance global de reescribe
    var num2 = 6;
    console.log('dentro del if ' + num1_1 + " " + num2);
}
console.log('fuera del if ' + num1 + " " + num2);
