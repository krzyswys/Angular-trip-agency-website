import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { DataManagmentService } from '../data-managment.service';
import { Tour } from '../tour-module/tour-module.component';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-single-tour-view',
  templateUrl: './single-tour-view.component.html',
  styleUrls: ['./single-tour-view.component.css']
})
export class SingleTourViewComponent {
  constructor(private routing: ActivatedRoute, private data: DataManagmentService) { }
  private subscribenTo: Subscription | undefined
  tours!: Tour[];
  tour!: Tour;
  id: number =0
    name: string=" "
    destination: string=""
    destinationCity:string= " "
    startDate:string= ""
    endDate: string=""
    quantity:number =0
    seats:number= 0
    price: number=0
    unit: string=""
    shortdesc: string="    "
    imagelink: string=""
    stars:number= 0
    amount: number=0
  ngOnInit(): void {
     this.subscribenTo = this.routing.params.subscribe(params => {
          this.id = params['id']
        })
        this.data.getDataService().subscribe(data => {
          this.tours = data;
          this.tour = this.tours[this.id-1];

        });
        // this.tours.forEach(element => {

        //   if(element.id ==this.id){
        //     this.name=element['name'];
        //     this.destination=element.destination
        //     this.destinationCity=element.destinationCity;
        //     this.startDate=element.startDate;
        //     this.quantity=element.quantity;
        //     this.seats=element.seats;
        //     this.unit=element.unit;
        //     this.shortdesc=element.shortdesc
        //     this.imagelink=element.imagelink;
        //     this.stars=element.stars;
        //     this.amount=element.amount;
        //   }
        // });
  }
  addtour=false;
  addTour(){
    this.addtour = !this.addtour;
  }
  getAddTour(){
    return this.addtour;
  }
  getStars(num: number){
    let tmp = []; 
    for(let i=0; i<num; i++){
      tmp.push(0);
    }
    return tmp;
  
  }
  ratingEventHandler(Tour: Tour, ev: any) {
    Tour.stars = ev
}
  ngOnDestroy(): void {
    if (this.subscribenTo)
      this.subscribenTo.unsubscribe()
  }

  @Output() formSubmitEvent = new EventEmitter<Tour>();

  TourAddForm = new FormGroup({
    tourname: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    Nazwa: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    Opinie: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    
   
    buytDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      
    ]),
 
  });

  wrong = false;
  ok = false;

  submitForm() {
    
    if (!this.TourAddForm.valid) {
      this.wrong = true;
      return;
    }
    let review : review;
      review = {
       names: this.TourAddForm.get('tourname')!.value  ?? '',
       tourname: this.TourAddForm.get('tourdestination')!.value ?? '',
       dsc: this.TourAddForm.get('tourdestinationCity')!.value ?? '',
       buyDate: this.TourAddForm.get('tourstartDate')!.value ?? '',
     } ;
     console.log(review)
    // this.formSubmitEvent.emit(review);
    this.wrong = false;
    this.ok = true;
  }
}
export interface review{
  names: string
  tourname: string
  dsc: string
  buyDate: string | null;
}
