import { JayMillarePortalComponent } from './portals/jay-millare-portal/jay-millare-portal.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { GoalDetailComponent } from './goals/goal-detail/goal-detail.component';
import { GoalPrimaryComponent } from './goals/goal-primary/goal-primary.component';
import { GoalSecondaryComponent } from './goals/goal-secondary/goal-secondary.component';

const routes: Routes = [
  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'goals', component: GoalListComponent },
  { path: 'jaymillare', component: JayMillarePortalComponent },
  {
    path: 'goals/:id',
    component: GoalDetailComponent,
    children: [
      {
        path: 'primary',
        component: GoalPrimaryComponent
      },
      {
        path: 'secondary',
        component: GoalSecondaryComponent
      }
    ]
  },
  // wildcard route
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  GoalListComponent,
  GoalDetailComponent,
  GoalPrimaryComponent,
  GoalSecondaryComponent,
  PageNotFoundComponent,
  // portals
  JayMillarePortalComponent
];
