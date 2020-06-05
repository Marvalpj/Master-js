//la clase debe llevar el mismo nombre que el archivo
class Camiseta {
    //propiedaddes
    private color: string
    private modelo: string
    private marca: string
    private talla: string
    private precio: number

    //constructor
    constructor( color:string , modelo:string , marca:string , talla:string , precio:number){
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio
    }

    //metodos
    public  setColor( color: string ){
        this.color = color
    }
    public  setModelo( modelo:string ){
        this.modelo = modelo
    }
    public  setMarca( marca:string ){
        this.marca = marca
    }
    public  setTalla( talla:string ){
        this.talla = talla
    }
    public  setPrecio( precio: number ){
        this.precio = precio
    }

}


// var camiseta = new Camiseta( 'azul', 'camiseta' , 'nike' ,  'L' , 20)

// // camiseta.setColor( 'azul')


// var playera = new Camiseta( 'gris', 'playera' , 'adidas' ,  'S' , 30 )

// // playera.setColor('rojo')

// console.log(camiseta)
// console.log(playera)