import { Component, OnInit,ElementRef } from '@angular/core';
import {fromEvent } from 'rxjs';
import { map , take } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // loading:boolean;

  constructor(private el:ElementRef) { }

  ngOnInit() {
    // convert the 'keyup' event  into an observable stream
  	const unsubscribed = fromEvent(this.el.nativeElement,'keyup').
    pipe(
    //  extract the value of the input
    map((e:any)=> e.target.value))
   // .filter((text:string)=>text.length >1)
    // .debouncTime(250)
    // .do(()=> this.loading.emit(true))
    .subscribe(
    (val:string)=>{ //onSuccess
      console.log(`Value Search input ${val}`);
    },
    (err:any)=>{ //onError
      console.warn(`Error ${ err}`);
    },
    ()=>{// onCompltion

    },
    )
}

}
