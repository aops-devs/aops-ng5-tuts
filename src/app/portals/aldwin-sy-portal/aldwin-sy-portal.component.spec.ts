import { Observable } from 'rxjs/Observable';
import { ContactService } from './../../shared/services/contact.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AldwinSyPortalComponent } from './aldwin-sy-portal.component';
import { By } from '@angular/platform-browser';
import 'rxjs/add/observable/of';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockContactService {
  getContacts() {
    return Observable.of( { id: 1, name: 'Jay Millare', email: 'jaymillare@gmail.com', number: '09151491971' },
    { id: 2, name: 'Aldwin Sy', email: 'aldwinsy@gmail.com', number: '09992216535' },
    { id: 3, name: '', email: '', number: '' });
  }
}

describe('AldwinSyPortalComponent', () => {
  let component: AldwinSyPortalComponent;
  let fixture: ComponentFixture<AldwinSyPortalComponent>;
  let contactService: ContactService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule],
      declarations: [ AldwinSyPortalComponent ],
      providers: [
        { provide: ContactService, useClass: MockContactService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AldwinSyPortalComponent);
    component = fixture.componentInstance;
    contactService = fixture.debugElement.injector.get(ContactService);
    component.actionType = 'SIMPLE_FORM';
    component.submitted = false;
    component.contactList = [];
    fixture.detectChanges();
    component.contactList = [{ id: 1}, {id: 2}];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide calculator when it is not selected', () => {
    const calculator = fixture.debugElement.query(By.css('#div-simple-calculator'));
    expect(calculator).toBeNull();
    expect(calculator).toBeFalsy();
  });

  it('should show calculator when it is selected', () => {
    component.actionType = 'SIMPLE_CALCULATOR';
    fixture.detectChanges();
    const calculator = fixture.debugElement.query(By.css('#div-simple-calculator'));
    expect(calculator).toBeTruthy();
  });

  // Test Component Function
  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should not call the onSubmit method when form is invalid', () => {
    spyOn(component, 'onSubmit');
    component.actionType = 'SIMPLE_FORM';
    fixture.detectChanges();
    const saveBtn = fixture.debugElement.query(By.css('#save-btn')).nativeElement;
    saveBtn.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('simple form should be invalid', () => {
    component.actionType = 'SIMPLE_FORM';
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['number'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('simple form should be invalid', () => {
    component.actionType = 'SIMPLE_FORM';
    component.contactForm.controls['email'].setValue('aldwin@gmail.com');
    component.contactForm.controls['name'].setValue('aldwin');
    component.contactForm.controls['number'].setValue('09992216535');
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('simple form save button should be enabled', () => {
    component.actionType = 'SIMPLE_FORM';
    component.contactForm.controls['email'].setValue('aldwin');
    component.contactForm.controls['name'].setValue('aldwin');
    component.contactForm.controls['number'].setValue('09992216535');
    fixture.detectChanges();
    const saveBtn = fixture.debugElement.query(By.css('#save-btn')).nativeElement;
    expect(saveBtn.disabled).toBeTruthy();
  });

  it('simple form save button should be enabled', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.actionType = 'SIMPLE_FORM';
    component.contactForm.controls['email'].setValue('aldwin@gmail.com');
    component.contactForm.controls['name'].setValue('aldwin');
    component.contactForm.controls['number'].setValue('09992216535');
    fixture.detectChanges();
    const saveBtn = fixture.debugElement.query(By.css('#save-btn')).nativeElement;
    saveBtn.click();
    expect(component.submitted).toBeTruthy();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('simple form get contact click', () => {
    component.actionType = 'SIMPLE_FORM';
    fixture.detectChanges();
    const getContact = fixture.debugElement.query(By.css('#contact-btn')).nativeElement;
    getContact.click();
    expect(component.contactList.length).not.toEqual(0);
  });

  // custom events
  it('should call inputFocus method when focus event is fired', () => {
    spyOn(component, 'inputFocus');
    const inputName = fixture.debugElement.query(By.css('#input-email')).nativeElement;
    const event = new CustomEvent('focus');
    inputName.dispatchEvent(event);
    expect(component.inputFocus).toHaveBeenCalledWith('email');
  });

  it('fire custom event', () => {
    spyOn(component, 'returnToForm').and.callThrough();
    component.actionType = 'SIMPLE_TESTHOST';
    fixture.detectChanges();
    const testHost = fixture.debugElement.query(By.css('app-test-host')).nativeElement;
    testHost.dispatchEvent(new CustomEvent('returnToForm', {detail: 'SIMPLE_FORM'}));
    expect(component.returnToForm).toHaveBeenCalled();
    expect(component.actionType).toEqual('SIMPLE_FORM');
  });

  it('should call clearContacts method', () => {
    component.actionType = 'SIMPLE_FORM';
    fixture.detectChanges();
    const clearButton = fixture.debugElement.query(By.css('#clear-btn')).nativeElement;
    clearButton.click();
    expect(component.contactList).toEqual([]);
  });


});
