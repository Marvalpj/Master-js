//la clase debe llevar el mismo nombre que el archivo

interface CamisetaBase {
    setColor( color )
    getColor()
}


//decorador
function estampar( logo:string ){
    
    return function(target:Function){
        target.prototype.estampacion = function ():void {
            console.log('camiseta estampada con el logo de: ' + logo)
        }
    }

}


@estampar(`gola`)
class Camiseta implements CamisetaBase{
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
    public getColor(){
        return this.color
    }

}


class Sudadera extends Camiseta {
    public capucha: boolean

    setCapucha( capucha:boolean ){
        this.capucha = capucha
    }

    getCapuha():boolean{
        return this.capucha
    }
}

var camiseta = new Camiseta( 'azul', 'camiseta' , 'nike' ,  'L' , 20)
console.log(camiseta)
camiseta.estampacion()

var sudadera = new Sudadera( 'azul', 'sudadera' , 'adidas' ,  'L' , 20)
sudadera.setCapucha(true)
sudadera.setColor('gris')
console.log(sudadera)

