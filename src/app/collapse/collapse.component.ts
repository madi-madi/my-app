import { Component, OnInit,Input } from '@angular/core';
import { Collapse } from '../models/collapse';


@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  @Input() collapse: Collapse;

	isOpen:boolean = false;
	showModal:boolean = false;
  constructor() { 

  }

  ngOnInit() {
  }

    change($event) {
    this.showModal = $event;
  }

}
