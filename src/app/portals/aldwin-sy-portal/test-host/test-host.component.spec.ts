import { ContactListMock } from './contact-list-mock';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHostComponent } from './test-host.component';
import { Component } from '@angular/core';

@Component({
  template: `
  <app-test-host [contact]="contact" (returnToForm)='returnToForm()'></app-test-host>`
})
class TestComponent {
  contact = {
    email: 'jess@gmail.com',
    name: 'jess',
    number: '09992216535'
  };
  actionType = '';

  returnToForm() {
    this.actionType = 'SIMPLE_FORM';
  }
}

describe('TestComponent', () => {
  let component;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input properties', () => {
    component.contact.name = 'aldwinsy';
    const name = fixture.debugElement.query(By.css('#td-input-name')).nativeElement;
    const email = fixture.debugElement.query(By.css('#td-input-email')).nativeElement;
    const number = fixture.debugElement.query(By.css('#td-input-number')).nativeElement;
    expect(name.textContent).toEqual('jess');
    expect(email.textContent).toEqual('jess@gmail.com');
    expect(number.textContent).toEqual('09992216535');
  });

  it('should emit output event when return button is clicked', () => {
    const returnButton = fixture.debugElement.query(By.css('#return-button')).nativeElement;
    returnButton.click();
    expect(component.actionType).toEqual('SIMPLE_FORM');
  });

});
