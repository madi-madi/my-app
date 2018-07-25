import { Component, OnInit ,EventEmitter ,Input, Output } from '@angular/core';
// import { Joke } from ''
import { Book } from '../models/book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	@Input() book : Book;
    // @Output() jokeDeleted : EventEmitter<any> = new EventEmitter();

	@Output() icrementDownload : EventEmitter<any> = new EventEmitter();
	@Output() decrementDownload: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  downloadBook(data:string){
  	// console.log(val);
  	this.icrementDownload.emit(data);
  }

    returnBook(data:string){
  	// console.log(val);
  	this.decrementDownload.emit(data);
  }

}
