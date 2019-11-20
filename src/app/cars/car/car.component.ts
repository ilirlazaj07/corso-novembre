import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarsService } from 'src/app/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges, OnDestroy {

  idProcesso;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.test.currentValue instanceof String);
    //  console.log(changes.);
  }


  constructor(private carsService: CarsService) { }

  @Input()
  test: string;

  @Input('macchina')
  car: Car;

  @Output()
  cancellaCar: EventEmitter<Car> = new EventEmitter();

  ngOnInit() {

    // if (this.car.id == 1) {

    //   this.idProcesso = setInterval(() => { console.log("EMIT!!!") }, 1000);
    //   console.log(this.carsService.getTimeStamp());

    // }


  }

  cancallami(event: Event) {

    // this.cancellaCar.emit(this.car)

  }


  ngOnDestroy(): void {
    clearInterval(this.idProcesso)
  }

}
