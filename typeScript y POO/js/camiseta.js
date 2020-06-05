//la clase debe llevar el mismo nombre que el archivo
var Camiseta = /** @class */ (function () {
    //constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //metodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    return Camiseta;
}());
// var camiseta = new Camiseta( 'azul', 'camiseta' , 'nike' ,  'L' , 20)
// // camiseta.setColor( 'azul')
// var playera = new Camiseta( 'gris', 'playera' , 'adidas' ,  'S' , 30 )
// // playera.setColor('rojo')
// console.log(camiseta)
// console.log(playera)
