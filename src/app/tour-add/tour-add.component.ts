import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Tour } from '../tour-module/tour-module.component';
import { AppServiceService } from '../app-service.service';
import { DataManagmentService } from '../data-managment.service';
@Component({
  selector: 'app-tour-add',
  templateUrl: './tour-add.component.html',
  styleUrls: ['./tour-add.component.css'],
})

export class TourAddComponent  {
  xtours: Tour | undefined;
  constructor(private dataService: DataManagmentService) { }
 

  sendData(tour: Tour) {
    this.dataService.sendTour(tour);
  }
 





  @Output() formSubmitEvent = new EventEmitter<Tour>();

  TourAddForm = new FormGroup({
    tourname: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    tourdestination: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    tourdestinationCity: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    
   
    tourstartDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      
    ]),
    tourendDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
    ]),
    tourquantity: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.maxLength(8),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    tourseats: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.maxLength(8),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
  
    tourunit: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.maxLength(4),
      Validators.minLength(1),
    ]),

    tourprice: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    tourshortdesc: new FormControl('', [
      Validators.required,
      Validators.maxLength(228),
      Validators.minLength(2),
    ]),
    tourimagelink: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.minLength(2),
    ]),
  });

  wrong = false;
  ok = false;

  submitForm() {
    
    // if (!this.TourAddForm.valid) {
    //   this.wrong = true;
    //   return;
    // }
    let newTour : Tour;
      newTour = {
      id:0,
       name: 'k',
       destination: 'k',
       destinationCity: 'k',
       startDate: 'k',
       endDate:  'k',
       quantity:  0,
       seats:  0,
       price:  0,
       unit:  'k',
       shortdesc:  'k',
       imagelink:  'k',
       stars: 0,
       amount: 0
     }  ;
     console.log(newTour)
     this.sendData(newTour)
    //  this.appsevice.appendNewTour(newTour);
    // this.formSubmitEvent.emit(newTour);
    this.wrong = false;
    this.ok = true;
  }
}

