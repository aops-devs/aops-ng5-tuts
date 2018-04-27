import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id: Number = 0;
  goals = [];

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this._dataService.goal.subscribe(res => this.goals = res);
    this._dataService.changeGoal(this.goals);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
