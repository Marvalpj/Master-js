import { Component , OnInit , DoCheck , OnDestroy} from '@angular/core'

@Component({
    //etiqueta del componente
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy{
    public titulo:string
    public listado:string;
    constructor(){

        this.titulo = 'componentes de videojuegos'

        this.listado = 'listado de los juegos mas populares'
        
        // console.log('constructor de videojuego')
    }

    ngOnInit(){
        // console.log('oninit videojuego ejecutado')
    }

    //DoCheck
    //se ejecuta cada ves que ocurre un cambio en el componente o en la app
    ngDoCheck(){
        // console.log('doCheck videojuego ejecutado')
    }

    cambiarTitulo(){
        this.titulo = 'cambio...'
    }

    //OnDestroy
    // sirve para que se ejecute algo antes de eliminar la instacia de un componente
    ngOnDestroy(){
        // console.log('ondestroy videojuego ejecutado')
    }
    
}