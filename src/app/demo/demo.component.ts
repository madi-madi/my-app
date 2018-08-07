import { Component, OnInit ,Input} from '@angular/core';

import { Collapse } from '../models/collapse';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
	collapseList: Array<any>;
  description: string =`
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem culpa fugiat placeat tempora aut, aperiam pariatur officia, vitae soluta corrupti labore, ad at cum! Voluptate, exercitationem eaque neque minus accusamus.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quibusdam aliquam in debitis adipisci, velit ipsam culpa! Culpa vitae mollitia nulla nesciunt quasi suscipit quaerat voluptate perspiciatis ut. Consequatur, explicabo.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam officia voluptatum libero aperiam recusandae reiciendis excepturi ipsam, esse, eaque porro minus quis magni blanditiis minima repellat veritatis nemo asperiores perferendis.
  `;
  constructor() { 


  	    this.collapseList = [
        new Collapse("Collapse1", this.description),
        new Collapse("Collapse2", this.description),
        new Collapse("Collapse3", this.description),

    ];
  }

  ngOnInit() {
  }

}
