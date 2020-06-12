import { Injectable } from '@angular/core'

import {Zapatilla} from '../models/zapatilla'

@Injectable()
export class ZapatillaService {
    
    public listaDeZapatillas:Array<Zapatilla>

    constructor(){
        this.listaDeZapatillas = [
            new Zapatilla('nike arimax' , 120 , 'nike' , 'red' , true),
            new Zapatilla('rebook clasic' , 20 , 'rebook' , 'red' , false),
            new Zapatilla('rebook spatan' , 40 , 'rebook' , 'yellow' , true),
            new Zapatilla('nike radeon' , 60 , 'nike' , 'blue' , false),
            new Zapatilla('super stars' , 110 , 'adidas' , 'blanca' , true)
        ]
    }

    getTexto(){
        return 'hellow word service'
    }
    getZapatillas():Array<Zapatilla>{
        return this.listaDeZapatillas
    }

}