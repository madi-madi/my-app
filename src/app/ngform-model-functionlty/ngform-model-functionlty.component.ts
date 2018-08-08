import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ngform-model-functionlty',
  templateUrl: './ngform-model-functionlty.component.html',
  styleUrls: ['./ngform-model-functionlty.component.css']
})
export class NgformModelFunctionltyComponent implements OnInit {
firstName: FormControl;
lastName: FormControl;
email: FormControl;
password: FormControl;
language: FormControl;
myform: FormGroup;
name:FormGroup;

langs: string[] = ['English','French','German',]
  constructor() { }

  ngOnInit() {
	this.createFormControl();
	this.createFormGroup();
	this.myform.valueChanges.subscribe(
		(val)=>{
			console.info('Changes'+ val)
		}
		);

  }

  createFormControl(){
	this.firstName= new FormControl('',[
		Validators.required,
		Validators.minLength(4)
		]);
	this.lastName= new FormControl('',[
		Validators.required,
		Validators.minLength(4)

		]);
	this.email=new FormControl('',[
	Validators.required,
	Validators.email
	]);
	this.password= new FormControl('',[
	Validators.required,
	Validators.minLength(6)
	]);
	this.language= new FormControl();
  }

    createFormGroup(){
  	this.myform = new FormGroup({
  		name: new FormGroup({
  			firstName:this.firstName,
  			lastName: this.lastName
  		}),
  		email:this.email,
  		password:this.password,
  		language: this.language
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
