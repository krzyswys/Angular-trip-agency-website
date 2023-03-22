
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { DataManagmentService } from '../data-managment.service';
@Component({
  selector: 'app-tours',
  templateUrl: './tour-module.component.html',
  styleUrls: ['./tour-module.component.css']
})
export class TourModuleComponent implements OnInit {


  tours: Tour[]=[];
  data:any;
  data2: any;
  ntour: Tour[]=[];
  btours: Tour[] = []
  constructor(private appsevice: AppServiceService,private dataService: DataManagmentService) {
    this.dataService.getDataService().subscribe(data => {
      this.tours = data;
    });
    // this.dataService.getTour().subscribe((data2: Tour[]) => {
    //   this.ntour =data2
      
    // });
  }

  photosList: any[] = []
 

  ngOnInit(): void {
    this.appsevice.btours.subscribe(c => {
      this.btours = c;
    });
  
 
  }
  getAllTours(){
    console.log(this.ntour, "asdasd")
      console.log(this.tours)
    return this.tours.concat(this.ntour)
  }
getStars(num: number){
  let tmp = []; 
  for(let i=0; i<num; i++){
    tmp.push(0);
  }
  return tmp;

}


nextCount(tour: Tour) {
  this.appsevice.addT(tour);
}
removeT(tour: Tour) {
  this.appsevice.removeT(tour);
}




get getTours(){
  return this.tours;
}
  addtour=false;
  addTour(){
    this.addtour = !this.addtour;
  }
  getAddTour(){
    return this.addtour;
  }
  remove(Tour: Tour) {
    if (Tour.amount >= 1)
      Tour.amount -= 1
      this.removeT(Tour);

  }
  add(Tour: Tour) {
    if (Tour.amount < Tour.quantity)
      Tour.amount += 1
      this.nextCount(Tour);
  }
  

  getMaxPriceTour(tours: Tour[]) {
    let max = -1
    let maxT = <Tour>{};
    for (let el of tours) {
      if (el.price > max) {
        max = el.price
        maxT = el
      }
    }
    return maxT
  }

  getMinPriceTour(tours: Tour[]) {
    let min = Infinity
    let minT = <Tour>{}
    for (let el of tours) {
      if (el.price < min) {
        min = el.price
        minT = el
      }
    }
    return minT
  }

  deleteTour(Tour: Tour) {
    for (const i in this.tours) {
      if (this.tours[i] == Tour) {
        this.tours.splice(parseInt(i), 1)
        return
      }
    }
  }
  getOrderedAmount(tours: Tour[]): number {
    let c = 0;
    for (let e of tours) {
      c += e.amount
    }
    return c;
  }
  getImageUrl(Tour: Tour){
    return Tour.imagelink
  }



  formSubmitEventHandler(Tour: Tour) {
    this.tours.push(Tour)
  }

  ratingEventHandler(Tour: Tour, ev: any) {
      Tour.stars = ev
  }


}



export interface Tour {
  id: number;
  name: string;
  destination: string;
  destinationCity: string;
  startDate: string;
  endDate: string;
  quantity: number;
  seats: number;
  price: number;
  unit: string;
  shortdesc: string;
  imagelink: string;
  amount: number;
  stars: number;
 
}

