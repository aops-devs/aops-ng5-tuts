import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalPrimaryComponent } from './goal-primary/goal-primary.component';
import { GoalSecondaryComponent } from './goal-secondary/goal-secondary.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'goals', component: GoalListComponent },
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
  PageNotFoundComponent
];
