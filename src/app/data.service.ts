import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  myGoals = [
    {
      id: 0,
      goal: 'My first Goal'
    },
    {
      id: 1,
      goal: 'Goal #2'
    },
    {
      id: 2,
      goal: 'Goal #3'
    },
    {
      id: 3,
      goal: 'Goal #4'
    }
  ];

  private goals = new BehaviorSubject<any>(this.myGoals);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
