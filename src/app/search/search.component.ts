import { Component, OnInit,ElementRef,OnDestroy } from '@angular/core';
import {Observable,fromEvent ,Subscription , interval } from 'rxjs';
import { map ,debounceTime,filter } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  // loading:boolean;
  // characters: string[] = ['A', 'B', 'C', 'D'];
  // Obs:Observable<number>;
  // counter: any;

sub: Subscription;
  constructor(private el:ElementRef) { }

  ngOnInit() {
    // convert the 'keyup' event  into an observable stream
    const unsubscribed = fromEvent(this.el.nativeElement,'keyup').
    pipe(
    //  extract the value of the input
    debounceTime(500),
    map((e:any)=> e.target.value),
    filter((e:string)=>e.length >0)

    )
    // .debouncTime(250)
    // .do(()=> this.loading.emit(true))
    // .debounceTime(500)
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
    // this.createObservable();
}


// createObservable(){
// // const min = 60;
//   interval(1000)
//     .subscribe((val:number)=>{
//       // const hou = val * 60*60;
//        // console.log(hou);
//       const hours:number = Math.floor(val / (60*60));
//       // console.log('hour '+ hours);

//       const diviformins:number = val % (60*60);
//       // console.log('diviformins ' + diviformins);

//       const mins:number = Math.floor(diviformins / 60);
//       // console.log('mins ' + mins);

//       const diviforsecs:number = diviformins % 60;
//       // console.log("diviforsecs "+ diviforsecs);

//       const secs:number = Math.ceil(diviforsecs); 
//       // console.log("secs "+ secs);

//       this.counter = {
//         h:hours,
//         m:mins,
//         s:secs,
        
//       }
//         return this.counter;
//       // const 
//       // console.log(hours);



//     })



      
  
// }

ngOnDestroy(){
  if (this.sub) {
    //un subscribe event keyup
    this.sub.unsubscribe();
  }
}

}
