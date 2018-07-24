import { Component, OnInit ,EventEmitter , Output} from '@angular/core';
// import { Joke } from ''
import { Joke } from '../models/joke';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	@Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  addJoke(setupVal:string , punchline:string){
  	this.jokeCreated.emit(new Joke(setupVal , punchline));
  	setupVal = '';
    punchline = '';
  	console.log(setupVal);
  }



}
