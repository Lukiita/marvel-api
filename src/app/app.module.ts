import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeriesService } from './series.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { SelectedSerieComponent } from './selected-serie/selected-serie.component';
import { SeriesListComponent } from './series-list/series-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectedSerieComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ SeriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
