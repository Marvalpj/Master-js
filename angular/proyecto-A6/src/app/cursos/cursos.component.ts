import { Component, OnInit } from '@angular/core';

import { Router , ActivatedRoute , Params} from '@angular/router'

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public name:string
  public followers:number


  constructor( private _route:ActivatedRoute , private _router:Router){ 
   
  }

  //se ejecuta despues del contructor al cargar
  ngOnInit() {
    this._route.params.subscribe( (parametros: Params) => {
      this.name = parametros.nombre
      this.followers = +parametros.followers
      // console.log(typeof this.followers)

      if(this.name == 'ninguno'){
        this._router.navigate(['/home'])
      }

    })
  }

  redirigir(){
    this._router.navigate(['/zapatillas'])
  }

}
