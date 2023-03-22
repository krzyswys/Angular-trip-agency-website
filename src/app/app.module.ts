import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourModuleComponent } from './tour-module/tour-module.component';
import { TourAddComponent } from './tour-add/tour-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NavComponent } from './nav/nav.component';
import { BaskedSmallComponent } from './basked-small/basked-small.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleTourViewComponent } from './single-tour-view/single-tour-view.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TourModuleComponent,
    TourAddComponent,
    StarRatingComponent,
    NavComponent,
    BaskedSmallComponent,
    MainPageComponent,
    SingleTourViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
