import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JayMillarePortalService {
  portalFeatures = [
    {
      featureId: 1,
      featureName: 'Pokemon Finder',
      featureUrl: 'pokemon-finder'
    },
    {
      featureId: 2,
      featureName: 'Just a Test Page',
      featureUrl: 'jay-test'
    }
  ];

  _baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPortalFeatures() {
    return this.portalFeatures;
  }

  // OBSERVABLE
  getPokemonList(): Observable<any> {
    const url = this._baseUrl + '/pokemon/?limit=802&offset=0';
    return this.http.get(url);
  }

  // PROMISE
  getPokemons(): Promise<any> {
    const url = this._baseUrl + '/pokemon/?limit=802&offset=0';
    return this.http.get(url).toPromise();
  }

  getPokemonDetailsById(id): Observable<any> {
    const url = this._baseUrl + `/pokemon/${id}`;
    return this.http.get(url);
  }
}
