import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalPrimaryComponent } from './goal-primary.component';

describe('GoalPrimaryComponent', () => {
  let component: GoalPrimaryComponent;
  let fixture: ComponentFixture<GoalPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
