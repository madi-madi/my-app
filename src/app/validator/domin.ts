import {FormControl} from '@angular/forms';

// export class Domin {
export function emailDomainValidator(control: FormControl) :any{ 
let email = control.value; 2
if (email && email.indexOf("@") != -1) { 3
let [_, domain] = email.split("@"); 4
if (domain !== "codecraft.tv") { 5
return {
emailDomain: {
parsedDomain: domain
}
}
}
}
return null; 
}
// }

