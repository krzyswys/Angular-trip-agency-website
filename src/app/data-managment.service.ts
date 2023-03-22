import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import { Subject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8'
  })
};
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

@Injectable({
  providedIn: 'root'
})

export class DataManagmentService {
  private data = new Subject<any>();
  nt: any;
  private nTours= new Subject<Tour[]>();
  constructor(private http: HttpClient) { }
  sendTour(datas: Tour) {
    this.nt.push(datas);
    this.data.next(datas);
  }

  // clearTour() {
  //   this.data.next();
  // }

  getTour() {
    return this.nt.asObservable();
  }

  getDataService(): Observable<Tour[]>{
    return this.http.get<Tour[]>("./assets/data/toursData.json").pipe(
      map(data => {
        return data;
      })
    );



  }

  


}

