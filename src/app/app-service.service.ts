import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tour } from './tour-module/tour-module.component';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  tours: Tour[] = []
  nTours: Tour = {
    id: 0,
    name: "",
    destination: "",
    destinationCity: " ",
    startDate: "",
    endDate: "",
    quantity: 0,
    seats: 0,
    price: 0,
    unit: "",
    shortdesc: "    ",
    imagelink: "",
    stars: 0,
    amount: 0
}
  newTours: BehaviorSubject<Tour>;
  btours: BehaviorSubject<Tour[]>;
  constructor() {

    this.btours  = new BehaviorSubject(this.tours);
    this.newTours  = new BehaviorSubject(this.nTours);
  }
  appendNewTour(Tour:Tour){
    this.nTours =Tour;
    this.newTours.next(this.nTours);
    return;
  }
  appendTour(Tour:Tour){
    for(let i=0; i<this.tours.length; i++){ //zmienić na ID jakieś
      if(this.tours[i].destination == Tour.destination){
        this.tours[i].amount = Tour.amount
        return;
      }
    }
    this.tours.push(Tour);
    return;
  }
  removeTour(Tour:Tour){
    for(let i=0; i<this.tours.length; i++){ //zmienić na ID jakieś
      if(this.tours[i].destination == Tour.destination){
        this.tours[i].amount = Tour.amount
        if(this.tours[i].amount==0){
          this.tours.splice(i,1)
          return;
        }
      }
    }
  }

  removeT(Tour: Tour) {
    this.removeTour(Tour)
    this.btours.next(this.tours);
  }
  addT(Tour: Tour) {
    this.appendTour(Tour)
    this.btours.next(this.tours);
  }

  
}
