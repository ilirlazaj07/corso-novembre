import { Component, OnInit, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../Car';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../injectionRootCarsUrl';
import { skip, shareReplay, publishReplay, refCount, catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-routing',
  templateUrl: './cars-routing.component.html',
  styleUrls: ['./cars-routing.component.css']
})
export class CarsRoutingComponent implements OnInit {

  constructor(private http: HttpClient, @Inject(API_URL) private carsUrl: string, private router: Router,
    private routeAttiva: ActivatedRoute
  ) { }

  cars$: Observable<Car[]>;

  ngOnInit() {
    this.cars$ = this.http.get<Array<Car>>(this.carsUrl).pipe(
      publishReplay(),
      refCount(),
      catchError(() => of([{ id: 0, name: 'IMPLEMENTARE UN BACKEND FUNZIONANTE !!!' }]))
    );
  }

  goToCar(id) {
    this.router.navigate([id], { relativeTo: this.routeAttiva })
  }

}
