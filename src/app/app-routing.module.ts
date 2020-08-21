import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SocialComponent } from './components/social/social.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "social", component: SocialComponent },
  { path: "stats", component: StatsComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
