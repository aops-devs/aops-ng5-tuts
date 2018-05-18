import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
  _url = 'assets/data/contacts.json'; // sample data from json file

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get(this._url);
  }
}
