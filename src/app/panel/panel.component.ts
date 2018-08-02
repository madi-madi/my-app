import { Component, OnInit,AfterContentInit,QueryList,ContentChildren,Input,
Output, EventEmitter } from '@angular/core';
import {PanelListComponent} from '../panel-list/panel-list.component';
import { Panel } from '../models/panel';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit,
AfterContentInit {
    @Output() jokeDeleted : EventEmitter<any> = new EventEmitter();
  @Input() panel :Panel;
  @Output() selectPanel: EventEmitter<Panel> = new EventEmitter<Panel>();

    @Output() panelSelected : EventEmitter<any> = new EventEmitter();

	@ContentChildren(PanelListComponent) panelListComponent: QueryList<PanelListComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
  	console.log(this.panelListComponent.toArray());
  }
  selected(val){
    console.log(val);
    this.selectPanel.emit(val);
  }
}
