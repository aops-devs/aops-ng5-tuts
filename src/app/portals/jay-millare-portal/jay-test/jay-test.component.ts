import { ISubscription } from 'rxjs/Subscription';
import { JayMillarePortalService } from './../../../shared/services/jay-millare-portal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-jay-test',
  templateUrl: './jay-test.component.html',
  styleUrls: ['./jay-test.component.scss']
})
export class JayTestComponent implements OnInit, OnDestroy {
  subscription: ISubscription;

  pokemons = [];
  isPromiseReqInitiated = false;

  pokemonList = [];
  isObservableReqInitiated = false;

  constructor(private jayMillarePortalService: JayMillarePortalService) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

    this.subscription.unsubscribe();
    console.log('TEST PAGE INSTANCE HAS BEEN DESTROYED');
  }

  getPokemonsUsingPromise() {
    this.isPromiseReqInitiated = true;
    // using promise
    this.jayMillarePortalService
      .getPokemons()
      // finished
      .then(res => {
        this.pokemons = res.results;
        console.log('PROMISE - finished');
        console.log('PROMISE data: ', this.pokemons);
      })
      // error
      .catch(error => {
        console.log('PROMISE - failed');
      });
  }

  getPokemonsUsingObservable() {
    this.isObservableReqInitiated = true;
    // using observable
    this.subscription = this.jayMillarePortalService.getPokemonList().subscribe(
      // onNext
      res => {
        this.pokemonList = res.results;
        console.log('OBSERVABLE - working');
      },
      // onError
      error => {
        console.log('OBSERVABLE - failed');
      },
      // onComplete
      () => {
        console.log('OBSERVABLE - completed');
        console.log('OBSERVABLE data: ', this.pokemonList);
      }
    );
  }

  resetPageData() {
    this.isPromiseReqInitiated = false;
    this.isObservableReqInitiated = false;
    this.pokemons = [];
    this.pokemonList = [];
  }

  cancelObservableRequest() {
    this.subscription.unsubscribe();
    console.log('OBSERVABLE REQUEST HAS BEEN CANCELLED');
  }
}
