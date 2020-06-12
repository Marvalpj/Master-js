import {Component , OnInit} from '@angular/core'
import {Zapatilla} from '../models/zapatilla'
import {ZapatillaService} from '../services/zapatillas.service'

import { from } from 'rxjs'
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    // para poder usar un servicio se debe agregar en los providers
    providers : [ZapatillaService]

})

export class ZapatillasComponent implements OnInit {
    public titulo:string = 'componente zapatillas'
   
    public marcas:string[]
    public color:string
    public miMarca:string
    public listaDeZapatillas:Array<Zapatilla>
    
    // En resumen, TypeScript entiende que, si defines la visibilidad de un parámetro en el constructor, o que quieres 
    // hacer en realidad es crear una propiedad en el objeto recién construido, con el valor recibido por parámetro.
    constructor(  private _zapatillaServie:ZapatillaService){
       this.marcas = new Array()
       this.color = 'red'
       this.miMarca = 'por defecto'
    }

    ngOnInit(){
        this.listaDeZapatillas = this._zapatillaServie.getZapatillas()
        alert(this._zapatillaServie.getTexto())
        this.getMarcas()
    }

    getMarcas(){
        this.listaDeZapatillas.forEach( (val , index) => {
            if(this.marcas.indexOf(val.marca) < 0){
                this.marcas.push(val.marca)
            }
        })   
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