import { AOPSPortalService } from './../../shared/services/portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jay-millare-portal',
  templateUrl: './jay-millare-portal.component.html',
  styleUrls: ['./jay-millare-portal.component.scss']
})
export class JayMillarePortalComponent implements OnInit {
  portals = [];
  constructor(private aopsPortalService: AOPSPortalService) { }

  ngOnInit() {
    this.aopsPortalService.getPortalsUsingHTTP().subscribe(res => this.portals = res);
  }

}
