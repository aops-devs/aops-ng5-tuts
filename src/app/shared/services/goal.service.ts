import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GoalService {
  goals = [
    {
      id: 1,
      goalTitle: 'Cross another continent off my list'
    },
    {
      id: 2,
      goalTitle: 'Take more long weekends'
    },
    {
      id: 3,
      goalTitle: 'Visit one new place per month'
    },
    {
      id: 4,
      goalTitle: 'Just go somewhere'
    },
    {
      id: 5,
      goalTitle: 'Take proper two-week trip to Tondo'
    },
    {
      id: 6,
      goalTitle: 'Finally take a solo trip - Divisoria'
    },
    {
      id: 7,
      goalTitle: 'See more of my own country'
    },
    {
      id: 8,
      goalTitle: 'Kick back on the best island in the world'
    },
    {
      id: 9,
      goalTitle: 'Road trip with the hypebeasts'
    }
  ];

  private goalSubject = new BehaviorSubject<object>(this.goals);
  goalSource = this.goalSubject.asObservable();

  constructor() {}

  changeGoal(goalObj) {
    this.goalSubject.next(goalObj);
  }
}
