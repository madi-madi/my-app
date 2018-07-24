import { Component, OnInit , Input ,Output , EventEmitter } from '@angular/core';
import { Joke } from '../models/joke';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  // @Output() jokeDeleted = new EventEmitter<Joke>();
    @Output() jokeDeleted : EventEmitter<any> = new EventEmitter();

	// setup:string;
	// punchline:string;
  constructor() {
  	// this.setup ="Forsan Technology";

  	// this.punchline= " Angular Cli ";
   }

  ngOnInit() {
  }

  deleteJoke(val:string){
    this.jokeDeleted.emit(val);
    console.log(val);
  }

}
