import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Collapse } from '../models/collapse';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('ngModal', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input()  mcollapse: Collapse;
  // colse modal
    // @Input() closable = true;
    // visible modal
    @Input() visible: boolean;
    // visible change  from child modal to parent collapse
    // 
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen:boolean = false;



  constructor() { 
  
  }

  ngOnInit() {
  }



    close() {
     // close from modal child collapse parent :become visible = false <isClosed>
    this.visible = false;
    // send vaal false <isClosed>
    this.visibleChange.emit(this.visible);

}
}