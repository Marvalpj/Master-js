import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  public widthSlider:number
  public anchuraToSlider:number
  public captions:boolean


  constructor() {
    this.captions = true
   }

  ngOnInit(): void {

  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider
  }
  
  resetSlider(){
    this.anchuraToSlider = null
  }
}
