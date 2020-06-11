import {Component , OnInit} from '@angular/core'
import {Zapatilla} from '../models/zapatilla'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
    public titulo:string = 'componente zapatillas'
    public listaDeZapatillas:Array<Zapatilla>
    public marcas:string[]
    public color:string
    public miMarca:string
    
    constructor(){
       this.listaDeZapatillas = [
           new Zapatilla('nike arimax' , 120 , 'nike' , 'red' , true),
           new Zapatilla('rebook clasic' , 20 , 'rebook' , 'red' , false),
           new Zapatilla('rebook spatan' , 40 , 'rebook' , 'yellow' , true),
           new Zapatilla('nike radeon' , 60 , 'nike' , 'blue' , false),
           new Zapatilla('super stars' , 110 , 'adidas' , 'blanca' , true)
       ]
       this.marcas = new Array()
       this.color = 'red'
       console.log(this.color)
       this.miMarca = 'por defecto'
    }

    ngOnInit(){
        console.log(this.listaDeZapatillas)
        this.getMarcas()
    }

    getMarcas(){
        this.listaDeZapatillas.forEach( (val , index) => {
            if(this.marcas.indexOf(val.marca) < 0){
                this.marcas.push(val.marca)
            }
            console.log(index)
        })
        console.log(this.marcas)    
    }
    getMarca(){
        alert(this.miMarca)
    }
    addMarca(){
        this.marcas.push(this.miMarca)
    }

    borrarMarca(indice){
        //delete this.marcas[indice]
        //el segundo parametro indica el numero de elementos a eliminar
        this.marcas.splice(indice , 1)
    }

    onBlur(){
        console.log('ha salido del input')
    }

    mostrarPalabra(){
        alert(this.miMarca)
    }
}