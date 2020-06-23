import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from '../models/ContactoUsuario'
@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public user:ContactoUsuario

  constructor(){
    this.user = new ContactoUsuario('','','','')
    // this.user = new ContactoUsuario('Pedro','Jose','marvalpj','probando')
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.user)
    form.reset()
  }
}
