import { Directive } from '@angular/core';
// Provide the directive with the validator function on the token NG_VALIDATORS.
import {NG_VALIDATORS} from '@angular/forms';
import { emailDomainValidator } from './validator/domin'


@Directive({
  selector: '[emailDomin][ngModel]',
  providers:[
  {
  	provide:NG_VALIDATORS,
  	useValue: emailDomainValidator,
  	multi:true
  }

  ]
})
export class EmailDominDirective {

  constructor() { }

}
