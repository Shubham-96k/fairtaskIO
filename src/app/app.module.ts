import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairdashboardComponent } from './shared/components/fairdashboard/fairdashboard.component';
import { FaircardComponent } from './shared/components/faircard/faircard.component';
import { FairdetailsComponent } from './shared/components/fairdetails/fairdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    FairdashboardComponent,
    FaircardComponent,
    FairdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
