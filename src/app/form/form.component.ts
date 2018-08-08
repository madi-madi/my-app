import { Component, OnInit ,EventEmitter , Output} from '@angular/core';
// import { Joke } from ''
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { Joke } from '../models/joke';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  myform :FormGroup;
  punchline:FormControl;
  setup:FormControl;
  setupVal:string;
  punchlineVal:string;
  constructor() { }

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
    this.myform.valueChanges.subscribe(
    (val)=>{
      // console.info('Changes'+ val)
    }
    );
  }

  createFormControl(){
    this.setup = new FormControl('',[
        Validators.required
      ]);
    this.punchline = new FormControl('',[
        Validators.required
      ]);
  }

  createFormGroup(){
    this.myform = new FormGroup({
      setup:this.setup,
      punchline:this.punchline
    });
  }

  onSubmit(){
    
    if (this.myform.valid) {
      console.info(''+ this.myform.value.setup);
      this.setupVal =this.myform.value.setup ;
      this.punchlineVal =this.myform.value.punchline ;
    this.jokeCreated.emit(new Joke(this.setupVal ,this.punchlineVal));
      this.myform.reset();
    }else{
      console.warn('Form Invalid');
      // console.timeStamp(name);
      // console.timeEnd(name);
    }
  }

  addJoke(setupVal:string , punchlineVal:string){
  	this.jokeCreated.emit(new Joke(setupVal , punchlineVal));
      this.myform.reset();

  	// setupVal = '';
   //  punchline = '';
  	// console.log(setupVal);
  }



}
