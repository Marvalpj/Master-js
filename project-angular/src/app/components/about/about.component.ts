import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string
  public subTitle:string
  public email:string

  constructor(){ 
    this.title = 'Pedro Jose'
    this.subTitle = 'Estudiante y desarrollador'
    this.email = 'correo@prueba.com'
  }

  ngOnInit(): void {
  }

}
