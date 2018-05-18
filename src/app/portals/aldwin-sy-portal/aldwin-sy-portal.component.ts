import { ContactService } from './../../shared/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-aldwin-sy-portal',
  templateUrl: './aldwin-sy-portal.component.html',
  styleUrls: ['./aldwin-sy-portal.component.scss']
})
export class AldwinSyPortalComponent implements OnInit {
  contactList = [];
  actionType = '';
  showName = false;
  showNumber = false;
  showEmail = false;
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    number: ''
  };
  submitted = false;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      'name': new FormControl(this.contact.name, Validators.required),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'number': new FormControl(this.contact.number, [
        Validators.required,
        Validators.minLength(11)
      ])
    });
  }

  onSubmit() {
    this.submitted = true;
    this.contact.name = this.contactForm.controls['name'].value;
    this.contact.number = this.contactForm.controls['number'].value;
    this.contact.email = this.contactForm.controls['email'].value;
    console.log('contact', this.contact);
    this.actionType = 'SIMPLE_TESTHOST';
  }

  inputFocus(type) {
    if (type === 'name') {
      this.showName = true;
      this.showEmail = false;
      this.showNumber = false;
    } else if (type === 'email') {
      this.showEmail = true;
      this.showName = false;
      this.showNumber = false;
    } else {
      this.showNumber = true;
      this.showName = false;
      this.showEmail = false;
    }
  }

  getContacts() {
    this.contactService.getContacts().subscribe(res => {
      console.log('contacts: ', res);
      this.contactList = res;
    });
  }

  clearContacts() {
    this.contactList = [];
  }

  returnToForm(type) {
    this.actionType = type.detail;
  }

}
