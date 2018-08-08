import { Component, OnInit,AfterViewInit,ViewChild,SimpleChanges,OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { emailDomainValidator } from '../validator/domin'

import {Signup } from '../models/signup';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit,AfterViewInit ,OnChanges{
  model: Signup = new Signup('', '', '', '', '');
langs: string[] = ['English','French','German',]
@ViewChild('f') form: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.form.valueChanges.subscribe(
    (val)=>{
 console.info('change subscribe ' + JSON.stringify(val))
       }
    );

  }

  ngOnChanges(changes: SimpleChanges){

  }

  onSubmit(){
  	console.info('submited');
    if (this.form.valid) {
      console.info(''+ this.form.value);
      this.form.reset();
    }else{
      console.warn("Invalid Submited");
    }
  }

}
