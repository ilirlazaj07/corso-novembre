import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../Car';
import { API_URL } from '../injectionRootCarsUrl';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-routing',
  templateUrl: './car-routing.component.html',
  styleUrls: ['./car-routing.component.css']
})
export class CarRoutingComponent implements OnInit {

  constructor(private http: HttpClient, @Inject(API_URL) private carsUrl: string, private route: ActivatedRoute) { }

  car: Car;

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.http.get<Car>(this.carsUrl + "/" + params['id']).subscribe(
          car => this.car = car
        );
      }
    );

  }

}
