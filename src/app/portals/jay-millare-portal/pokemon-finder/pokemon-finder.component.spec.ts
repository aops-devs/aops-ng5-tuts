import { RouterTestingModule } from '@angular/router/testing';
import { JayMillarePortalService } from './../../../shared/services/jay-millare-portal.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFinderComponent } from './pokemon-finder.component';

class JayMillarePortalServiceMock {}

describe('PokemonFinderComponent', () => {
  let component: PokemonFinderComponent;
  let fixture: ComponentFixture<PokemonFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      declarations: [ PokemonFinderComponent ],
      providers: [
        {provide: JayMillarePortalService, useClass: JayMillarePortalServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
