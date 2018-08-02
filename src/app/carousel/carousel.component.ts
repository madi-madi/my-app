import {
 Component,OnInit,Input,ContentChildren ,QueryList,AfterContentInit} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,
 AfterContentInit {
	@Input() delay: number; // delay
	curntIndex:number = 0;  // curnt item process
	// items: CarouselItemComponent[];
	// items: Array<any>;
//  return  cintent chidren on query list
	@ContentChildren(CarouselItemComponent)carouselItemComponent:QueryList<CarouselItemComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    // run aftert content init 
  	const items = this.carouselItemComponent.toArray();
    // inverse visible
  	 items[this.curntIndex].toggleVisiblty();
  	setInterval(()=> {
  		const countItemInCarousel = items.length;
  		items[this.curntIndex % countItemInCarousel].toggleVisiblty();
  		this.curntIndex++;
  		items[this.curntIndex % countItemInCarousel].toggleVisiblty();


  	}, this.delay);
  }

}
