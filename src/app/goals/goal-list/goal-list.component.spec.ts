import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from './../../shared/services/goal.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalListComponent } from './goal-list.component';

class GoalServiceMock {
  goalSource() {
    return Observable.of([
      {
        id: 1,
        goalTitle: 'Cross another continent off my list'
      },
      {
        id: 2,
        goalTitle: 'Take more long weekends'
      }]);
  }
}

class ActivatedRouteMock {}
class RouterMock {}

describe('GoalListComponent', () => {
  let component: GoalListComponent;
  let fixture: ComponentFixture<GoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      declarations: [ GoalListComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: GoalService, useClass: GoalServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
