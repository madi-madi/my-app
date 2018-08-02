import { Component, OnInit ,EventEmitter ,Input, Output } from '@angular/core';
// import { Joke } from ''
import { Book } from '../models/book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
// input book parent to child with branch book-add-list
	@Input() book : Book;
// output book child to parent with branch book-add-list
	@Output() icrementDownload : EventEmitter<any> = new EventEmitter();
	@Output() decrementDownload: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
// increment down book with branch book-add-list
  downloadBook(data:string){
  	// console.log(val);
  	this.icrementDownload.emit(data);
  }
// decrement down book with branch book-add-list
    returnBook(data:string){
  	// console.log(val);
  	this.decrementDownload.emit(data);
  }

}
