import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  goalId: Number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.goalId = this.route.snapshot.params.id;
  }

}
