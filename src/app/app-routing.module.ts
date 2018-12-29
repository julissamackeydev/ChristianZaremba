import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'latest', component:LatestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
