import { Component, OnInit,NgModule,Pipe } from '@angular/core';
//   forms 
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {

myform: FormGroup;

langs: string[] = [
'English',
'French',
'German',
]
  constructor() { }

  ngOnInit() {
  	this.myform= new FormGroup({
  		name:new FormGroup({
  			firstName: new FormControl('',[Validators.required]),
  			lastName: new FormControl('',[Validators.required]),
  		}),
  		email:new FormControl('',[
        Validators.required,
        Validators.email
        ]),
  		password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
        ]),
  		language: new FormControl(),

  	});
  }

  onSubmit(){
    if (this.myform.valid) {
      // code...
      console.info(this.myform.value);
      this.myform.reset();
    }else{
      console.warn('Invalid Form');
    }
    // $e.preventDefault();
  }

}
