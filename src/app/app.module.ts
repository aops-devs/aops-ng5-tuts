import { ContactService } from './shared/services/contact.service';
import { JayMillarePortalService } from './shared/services/jay-millare-portal.service';
import { AOPSPortalService } from './shared/services/portal.service';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalService } from './shared/services/goal.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AldwinSyPortalComponent } from './portals/aldwin-sy-portal/aldwin-sy-portal.component';
import { TestHostComponent } from './portals/aldwin-sy-portal/test-host/test-host.component';

@NgModule({
  declarations: [AppComponent, routingComponents, AldwinSyPortalComponent, TestHostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GoalService, AOPSPortalService, JayMillarePortalService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
