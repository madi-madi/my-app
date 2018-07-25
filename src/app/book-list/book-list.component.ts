import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
	bookList : Array<any>;

  constructor() {
  	this.bookList = [];

   }

  ngOnInit() {
  }

  addNewBook(data:Book){

  	this.bookList.unshift(data);
  }

  incrementDownloadBook(data){
    console.log(this.bookList[data].download++);
  }

  dencrementDownloadBook(data){
    this.bookList[data].download == 0 ? '':this.bookList[data].download--;
  }

}
