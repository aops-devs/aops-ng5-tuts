import { ContactListMock } from './contact-list-mock';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-host',
  templateUrl: './test-host.component.html',
  styleUrls: ['./test-host.component.scss']
})
export class TestHostComponent implements OnInit {
  @Input() public contact;
  @Output() returnToForm = new EventEmitter<object>();
  contactList = ContactListMock;

  constructor() { }

  ngOnInit() {
  }

  showDetails(index) {
    this.contactList[index].showDetails = true;
  }

  hideDetails(index) {
    this.contactList[index].showDetails = false;
  }

  callReturnToForm() {
    this.returnToForm.emit({detail: 'SIMPLE_FORM'});
  }


}
