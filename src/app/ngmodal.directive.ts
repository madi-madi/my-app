import { Directive, ElementRef,Renderer2,HostListener,Input,OnInit,
OnDestroy } from '@angular/core';

@Directive({
  selector: '[appNgmodal]'
})
export class NgmodalDirective implements OnInit,  OnDestroy {
	@Input() data:any;

  constructor(private el: ElementRef,private render:Renderer2) {

   }
   ngOnInit(){
     document.body.style.overflow='hidden';
   }

  @HostListener('mouseleave') onMouseleave(){
    // this.el.nativeElement.parentElemnt.remove();
    // gOnInit() {
    console.log(this.el);
    console.log(this.el.nativeElement.parentNode);
    // this.curntTarget()
  }



  ngOnDestroy(){
    document.body.style.overflow ='';
  }
  

}
