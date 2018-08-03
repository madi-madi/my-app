import { Directive,ElementRef,Renderer,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[Forsan]'
})
export class ForsanDirective {

    colors:string[] = ['#ff4903','#2aff03','#ffff03','#ff4903','#1976d2'];
   colorClass:string;
  constructor(private el: ElementRef, private render:Renderer) { //2
    render.setElementStyle(el.nativeElement, 'backgroundColor', '#1976d2');
   }

   @HostListener('click') onClicked(){
     
     let colorInteval =   setInterval(()=> {
     const random: number = Math.random() * (this.colors.length - 1);
    this.colorClass = this.colors[Math.round(random)]; 
    console.log(this.colorClass);
       // window.alert("Clicked"+ this.colorClass +' ' +this.colors.length - 1);
    this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', this.colorClass);


    },1000);
     // clearInterval(colorInteval);
  


   }

 // @HostListener('mouseover') onMoustover(){
 //   let nameSection = this.el.nativeElement.querySelector('.card-body');
 //   this.render.setElementStyle(nameSection,'fontSize','25px');
 // }

 // @HostBinding('class.card-body')private ishovering :boolean;

}

