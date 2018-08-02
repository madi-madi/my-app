import { Component, OnInit ,Pipe, PipeTransform  } from '@angular/core';
import { Book } from '../models/book';

// @Pipe({ name: 'orderByLast' });

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
	bookList : Array<any>; //booklist 

  constructor() {
  	this.bookList = [];

   }


  ngOnInit() {
  }
//  add new book function book-add-list
  addNewBook(data:Book){

  	this.bookList.unshift(data);
  }
//  increment down book
  incrementDownloadBook(data){
    console.log(this.bookList[data].download++);
  }
// decrement down book
  dencrementDownloadBook(data){
    this.bookList[data].download == 0 ? '':this.bookList[data].download--;
  }



}
