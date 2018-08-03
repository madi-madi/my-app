import { Component, OnInit ,Input, EventEmitter,Output} from '@angular/core';
import { Panel } from '../models/panel';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
  @Input() isOpen:boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();	
  data:string;
  panelList: Array<Panel>;

  constructor() {
    this.data = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at,
     commodi ut cum voluptates, natus animi esse provident ex eos quod repudiandae.
      Earum est quod et beatae repudiandae laboriosam enim.`;
	  this.panelList = [
	  	new Panel("Angular CLI",`
          Angular provides a utility to allow users to create and manage projects from the command line. It
          automates tasks like creating projects, adding new controllers, etc. It’s generally a good idea to use
          Angular CLI as it will help create and maintain common patterns across our application.
          To install Angular CLI, just run the following command:
          1 $ npm install -g @angular/cli
        `),
	  	new Panel("Typescript",`Once you have Node.js setup, the next step
                 is to install TypeScript. Make sure you install at least
                 version 2.1 or greater. To install it, run the following npm command:
                 1- $ npm install -g typescript`),
	  	new Panel("OPP",this.data)
	  ];
	  console.log(this.panelList);
   }

  ngOnInit() {
  	console.log(this.panelList)
  }

}
