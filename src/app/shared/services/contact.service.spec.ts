import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let contactService: ContactService;
  const expectedContacts = [
    { id: 1, name: 'Jay Millare', email: 'jaymillare@gmail.com' },
    { id: 2, name: 'Aldwin Sy', email: 'aldwinsy@gmail.com' },
    { id: 3, name: '', email: '', number: '' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService, HttpClient]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    contactService = TestBed.get(ContactService);
  });

  afterEach(() => {
    httpTestingController.verify();
    // Finally, we call the verify method on our HttpTestingController instance to ensure that there are no outstanding requests to be made.
  });

  it('should call the ContactService.getContacts()', () => {
    // call the method in the service that we’re testing and subscribe to returned observable.
    contactService
      .getContacts()
      .subscribe(
        contacts => {
          expect(contacts).toEqual(
            expectedContacts,
            'should return expected Scenario Details Problems'
          );
          // assert for the response event to have a body equal to our mock users.
          expect(contacts).toBeDefined();
          expect(contacts[1].name).toEqual('Aldwin Sy');
        }
      );
    const req = httpTestingController.expectOne(`assets/data/contacts.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedContacts); // The flush method completes the request using the data passed to it.
  });

});
