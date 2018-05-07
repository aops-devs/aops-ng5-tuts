import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSecondaryComponent } from './goal-secondary.component';

describe('GoalSecondaryComponent', () => {
  let component: GoalSecondaryComponent;
  let fixture: ComponentFixture<GoalSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
