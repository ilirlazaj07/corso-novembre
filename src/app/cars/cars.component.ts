import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Car } from '../Car';
import { CarsService } from '../cars.service';
import { AsyncService } from '../async.service';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarsService]
})
export class CarsComponent implements OnInit {

  constructor(
    private carsService: CarsService,
    private asyncService: AsyncService
    ) { }

  cars: Car[];

  testString: string | String = '';

  ngOnInit() {
    
    setTimeout(() => {
      this.asyncService.getSubject().subscribe(res => {
        // console.log('service carsComponent ', res)
      })
    }, 5000);
    // console.log(this.carsService.getTimeStamp());


    // this.cars = this.carsService.getCars();

    // setTimeout(() => {
    //   this.cars[2].name = "Ferrari";
    //   this.testString = new String('');
    // }, 5000);

  }

  datasss: any;

  carsTitle() {
    return "Date.now()";
  }

  togli(carIn: Car) {
    this.cars = this.cars.filter(
      (car: Car) => { return carIn != car }
    );
  }

}
