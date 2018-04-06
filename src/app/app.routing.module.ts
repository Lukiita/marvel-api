import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectedSerieComponent } from './selected-serie/selected-serie.component';
import { SeriesListComponent } from './series-list/series-list.component';

const routes: Routes = [
  {path:"", component: SeriesListComponent, pathMatch:"full"},
  {path:"serie/:id", component:SelectedSerieComponent},
  {path:"**", component: SeriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
