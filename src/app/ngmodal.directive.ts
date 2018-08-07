import { Directive, ElementRef,Renderer2,HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appNgmodal]'
})
export class NgmodalDirective {
	@Input() data:any;

  constructor(private el: ElementRef,private render:Renderer2) {

   }

  @HostListener('mouseleave') onMouseleave(){
  	// this.el.nativeElement.parentElemnt.remove();
  	// gOnInit() {
  		console.log(this.el);
  console.log(this.el.nativeElement.parentNode);
  	// this.curntTarget()
  }

}
