import { Component, OnInit ,EventEmitter , Output,ViewChild, ElementRef} from '@angular/core';
// import { Joke } from ''
import { NgForm } from '@angular/forms';

import { Book } from '../models/book';
@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {
	@Output() bookCreated = new EventEmitter<Book>();
   // @ViewChild('myForm') form: NgForm;


  constructor() { }

  ngOnInit() {
  }
// add new book  and filter url book  and emit 
  addBook(name:string , url:string,download:number){
  	 console.log( "Test");
        if (url.indexOf("//") > -1) {
      url = url.split('/')[2];
      console.log(url.indexOf("//") , "1");
    }
    else {
      url = url.split('/')[0];
      console.log(url , '2');
    }

    this.bookCreated.emit(new Book(name , url,download=0));
    // name = null;
    // url= null;
    // this.form.reset();
    // this.bookCreated = null;

    
  }

}
