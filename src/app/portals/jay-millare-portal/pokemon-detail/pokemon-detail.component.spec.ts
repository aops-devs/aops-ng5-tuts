import { JayMillarePortalService } from './../../../shared/services/jay-millare-portal.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { PokemonDetailComponent } from './pokemon-detail.component';

class JayMillarePortalServiceMock {
  getPokemonDetailsById() {}
}

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ PokemonDetailComponent ],
      providers: [
        { provide: JayMillarePortalService, useClass: JayMillarePortalServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
