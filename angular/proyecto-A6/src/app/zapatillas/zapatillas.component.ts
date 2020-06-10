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
    
    constructor(){
       this.listaDeZapatillas = [
           new Zapatilla('nike arimax' , 40 , 'nike' , 'red' , true),
           new Zapatilla('rebook clasic' , 20 , 'rebook' , 'red' , false),
           new Zapatilla('rebook spatan' , 40 , 'rebook' , 'yellow' , true),
           new Zapatilla('nike radeon' , 60 , 'nike' , 'blue' , false),
           new Zapatilla('super stars' , 25 , 'adidas' , 'blanca' , true)
       ]
       this.marcas = new Array()
       this.color = 'red'
       console.log(this.color)
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
}