import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {
  goalId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.goalId = this.route.snapshot.params.id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.goalId = id;
    });
  }

  showPrimaryGoals() {
    this.router.navigate(['primary'], { relativeTo: this.route });
  }

  showSecondaryGoals() {
    this.router.navigate(['secondary'], { relativeTo: this.route });
  }
}
