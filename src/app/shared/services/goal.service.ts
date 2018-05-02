import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GoalService {
  goals = [
    {
      id: 1,
      goalTitle: 'Goal #1'
    },
    {
      id: 2,
      goalTitle: 'Goal #2'
    },
    {
      id: 3,
      goalTitle: 'Goal #3'
    },
    {
      id: 4,
      goalTitle: 'Goal #4'
    }
  ];

  private goalSubject = new BehaviorSubject<object>(this.goals);
  goalSource = this.goalSubject.asObservable();

  constructor() {}

  changeGoal(goalObj) {
    this.goalSubject.next(goalObj);
  }
}
