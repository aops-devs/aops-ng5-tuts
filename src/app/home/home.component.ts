import { Component, OnInit } from '@angular/core';
import { AOPSPortalService } from '../shared/services/portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portals = [];
  constructor(
    private aopsPortalService: AOPSPortalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.aopsPortalService.getPortalsUsingHTTP().subscribe(res => {
      console.log('portals: ', res);
      this.portals = res;
    });
  }

  goToPortal(route) {
    this.router.navigate([route]);
  }
}
