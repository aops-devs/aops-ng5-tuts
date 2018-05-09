import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFinderComponent } from './pokemon-finder.component';

describe('PokemonFinderComponent', () => {
  let component: PokemonFinderComponent;
  let fixture: ComponentFixture<PokemonFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
