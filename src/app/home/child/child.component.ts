import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() inputGoal: string;
  @Output() outputGoal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickChildButton() {
    this.outputGoal.emit(`From child component: ${this.inputGoal}`);
  }

}
