import { Component, OnInit , Input ,Output , EventEmitter ,
  OnDestroy, OnChanges,SimpleChanges,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';
import { Joke } from '../models/joke';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnChanges,
  OnInit, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() joke: Joke;
  // @Output() jokeDeleted = new EventEmitter<Joke>();

  // @Input() data: Joke;
  // @Input() isSelected: boolean;
  @Output() selectJoke: EventEmitter<Joke> = new EventEmitter<Joke>();
  //output from joke child to joke-list parent
    @Output() jokeDeleted : EventEmitter<any> = new EventEmitter();

	// setup:string;
	// punchline:string;
  constructor() {
  	// this.setup ="Forsan Technology";
        console.log(`constructor: data, ${this.joke}`);
        // console.log("Constructor A");
  	// this.punchline= " Angular Cli ";
   }

  ngOnInit() {
    // console.log("OnInit B");
    // console.log(`ngOnChanges: data, ${JSON.stringify(this.data)}`);
  }

  ngOnChanges(changes:SimpleChanges){
    // console.log(JSON.stringify(changes));
    // for(let key in changes){ // in used with object
    //   console.log(`ngOnChanges: key `, key);
    //   console.log(`ngOnChanges: currentValue `, changes[key].currentValue);
    //   console.log(`ngOnChanges: previousValue `, changes[key].previousValue);
    // }
    // console.log("OnChanges C");
  }

  ngAfterContentInit(){
  // console.log("ngAfterContentInit D");

  }

  ngAfterContentChecked() {
    // console.log(`ngAfterContentChecked E`);
  }

  ngAfterViewInit() {
    // console.log(`ngAfterViewInit F`);
  }

  ngAfterViewChecked() {
    // console.log(`ngAfterViewChecked G`);
  }
  ngOnDestroy() {
    // console.log(`ngOnDestroy H`);
  }
// delet joke branch delete-joke
  deleteJoke(val:string){
    this.jokeDeleted.emit(val);
    console.log(val);
  }

  // select() {
  //   console.log(this.joke)
  //   this.selectJoke.emit(this.joke);
  // }

}
