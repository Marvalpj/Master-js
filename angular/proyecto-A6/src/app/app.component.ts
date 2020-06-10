import { Component } from '@angular/core';
//debes escribir el nombre textual como este declarado en el archivo
import { configuracion} from './models/config'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Master de js y angular';
    descripcion:string
    config
    constructor(){
      this.config = configuracion
      this.title = this.config.title
      this.descripcion = this.config.descripcion
    }

    public mostrar_videouegos = true
    
    ocultarVideojuegos(value){
      this.mostrar_videouegos = value
    }

}
