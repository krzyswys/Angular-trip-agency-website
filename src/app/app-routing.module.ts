import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourModuleComponent } from './tour-module/tour-module.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TourAddComponent } from './tour-add/tour-add.component';
import { BaskedSmallComponent } from './basked-small/basked-small.component';
import { SingleTourViewComponent } from './single-tour-view/single-tour-view.component';
const routes: Routes = [
  {path: 'tours', component: TourModuleComponent},
  {path: 'mainPage', component: MainPageComponent},
  {path: 'addTour', component: TourAddComponent},
  {path: 'basket', component: BaskedSmallComponent},
  {path: 'SingleTour/:id', component: SingleTourViewComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






