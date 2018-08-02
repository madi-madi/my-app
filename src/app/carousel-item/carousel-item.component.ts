import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
	visible:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisiblty(){
  	this.visible = !this.visible;
  }
}
