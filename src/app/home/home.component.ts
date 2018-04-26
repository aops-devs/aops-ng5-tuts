import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-35px)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(-35px)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: Number = 1;
  btnText: String = 'Add item';
  goals = [];
  goalText = 'My goal';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.goal.subscribe(res => this.goals = res);
    this._dataService.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  addGoal() {
    this.goals.push(this.goalText);
    this._dataService.changeGoal(this.goals);
  }

  removeGoal(i) {
    this.goals.splice(i, 1);
    this._dataService.changeGoal(this.goals);
  }

  clear() {
    this.goals = [];
    this._dataService.changeGoal(this.goals);
  }

  showNewGoal(event: any) {
    this.goalText = event;
  }

}
