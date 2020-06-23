import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/peticiones.services'

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any
  public userId:any
  public fecha:any

  public newUser:any
  public userSave:any

  constructor(
    private _peticionesService:PeticionesService
  ){ 
    
    this.userId = 1
    
    this.newUser = {
      name: "",
      job: ""
    }

  }

  ngOnInit(){
    this.cargaUsuario()
    this.fecha = new Date(2019,5,20)
  }

  cargaUsuario(){
    this.user = false
    this._peticionesService.getUser( this.userId ).subscribe(
      result => {
        this.user= result.data
      },
      error =>{
        console.log(error)
      }
    )
  }

  onSubmit(form){
    console.log(this.newUser)
    this._peticionesService.addUser(this.newUser).subscribe(
      Response =>{
        console.log(Response)
        this.userSave = Response
        form.reset()
      },
      error => {
        console.log(error)
      }
    )
  }


}
