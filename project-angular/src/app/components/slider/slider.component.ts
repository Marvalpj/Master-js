import { Component, OnInit, Input } from '@angular/core';
// import * as $ from 'jquery'
declare var $:any


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number
  @Input() captions:boolean
  constructor() {
   
   }

  ngOnInit(): void {
    $(function(){
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      });
    });
  

  }

}
