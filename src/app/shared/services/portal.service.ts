import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AOPSPortalService {
  _url = 'assets/data/portals.json'; // sample data from json file

  constructor(private http: HttpClient) {}

  getPortalsUsingHTTP(): Observable<any> {
    return this.http.get(this._url);
  }
}
