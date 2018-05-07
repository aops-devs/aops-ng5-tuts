import { GoalModel } from './../../shared/models/goal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from './../../shared/services/goal.service';
import { Component, OnInit } from '@angular/core';
import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-35px)',
                  offset: 0
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
              ])
            )
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3
                }),
                style({ opacity: 0, transform: 'translateY(-35px)', offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class GoalListComponent implements OnInit {
  itemCount: Number = 1;
  btnText: String = 'Add Goal';
  goals = [];
  goalText = 'Oh My Goal';
  id: string;

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(res => (this.id = res.id));
  }

  ngOnInit() {
    this.goalService.goalSource.subscribe((res: GoalModel[]) => {
      this.goals = res.map(goals => goals);
    });
    this.itemCount = this.goals.length;
  }

  addGoal() {
    const id = this.goals.length + 1;
    this.goals.push({ id: id, goalTitle: this.goalText });
    this.goalService.changeGoal(this.goals);
  }

  gotoDetails(goal) {
    this.router.navigate(['/goals', goal.id]);
  }

  clear() {
    this.goals = [];
    this.goalService.changeGoal(this.goals);
  }
}
