import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
jokeList: Array<any>;
selectJoke:Joke;

  constructor() { 
this.jokeList = [
	new Joke("Joke", "Punchline1"),
	new Joke("Joke", "Punchline2"),
	new Joke("Joke", "Punchline3"),

];
  }

  ngOnInit() {
    // console.log(this.jokeList);
  }

  addNewJoke(val:Joke){
  	this.jokeList.unshift(val);
  
  }

    deleteJokeEnd(data){
    console.log(data);
    this.jokeList.splice(data ,1);
  }

}
