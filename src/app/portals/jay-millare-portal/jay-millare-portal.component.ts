import { Router, ActivatedRoute } from '@angular/router';
import { JayMillarePortalService } from './../../shared/services/jay-millare-portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jay-millare-portal',
  templateUrl: './jay-millare-portal.component.html',
  styleUrls: ['./jay-millare-portal.component.scss']
})
export class JayMillarePortalComponent implements OnInit {
  features = [];
  constructor(
    private jayMillarePortalService: JayMillarePortalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.features = this.jayMillarePortalService.getPortalFeatures();
  }

  goToFeature(url) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
