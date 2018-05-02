import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyGoalModel } from '../mygoal.model';

@Component({
  selector: 'app-mygoals',
  templateUrl: './my-goals.component.html',
  styleUrls: ['./my-goals.component.scss'],
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
export class MyGoalsComponent implements OnInit {

  itemCount: Number = 1;
  btnText: String = 'Add item';
  goals = [];
  goalText = 'My goal';
  id: Number = 0;

  constructor(private _dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this._dataService.goal.subscribe((res: MyGoalModel[]) => {
      this.goals = res.map(goals =>  goals.goal);
     }
    );
    this.itemCount = this.goals.length;
  }

  addGoal() {
    this.goals.push(this.goalText);
    this._dataService.changeGoal(this.goals);
  }

  gotoDetails(i) {
    this.id = i;
    this.router.navigate([`/my-goals/${this.id}/details`]);
  }

  clear() {
    this.goals = [];
    this._dataService.changeGoal(this.goals);
  }

}
